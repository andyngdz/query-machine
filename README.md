<p align="center">
  <br />
  <img src="https://raw.githubusercontent.com/andyngdz/query-machine/main/logo.png" alt="XState" width="96"/>
  <br />
    <sub><strong>A combination of XState and Axios</strong></sub>
  <br />
  <br />
</p>

[![npm version](https://badge.fury.io/js/query-machine.svg)](https://badge.fury.io/js/query-machine)

query-machine is a combination of [XState](https://xstate.js.org/) and [Axios](https://axios-http.com/)

### Features

- Provides both XState/Axios by core
- Returns AxiosInstance and State Machines
- Reactive, easy to manage states

### Installation

Using npm:

```
npm install query-machine
```

Using bower:

```
bower install query-machine
```

Using yarn:

```
yarn install query-machine
```

## Quick start


### Create a new machine
```javascript
// hooks/useQueryMachine.ts

import { useCreateAxiosQueryMachine } from 'query-machine'

export const useQueryMachine = () => {
  const axiosQueryMachine = useCreateAxiosQueryMachine({
    baseURL: 'https://dog.ceo/api'
  })

  // axiosQueryMachine
  // [IUseQueryMachine, AxiosInstance]

  return axiosQueryMachine
}
```

#### Use your own AxiosInstance?
```javascript
// hooks/useQueryMachine.ts

// You need to install axios
import axios from "axios"
import { useCreateQueryMachine } from 'query-machine'

// Create a new axios instance
// Use this instance to config interceptors, etc...
export const apiBase = axios.create({ baseURL: 'https://dog.ceo/api' })

export const useQueryMachine = () => {
  const queryMachine = useCreateQueryMachine(apiBase)

  return queryMachine
}
```

### Example

```javascript
import { useQueryMachine } from 'hooks/useQueryMachine'

export const Home = () => {
  const [queryMachine] = useQueryMachine()
  const [dogState, { onGet }] = queryMachine<IDogResponse>()

  onGet('/breeds/image/random')

  // Check state, context
  // isRequest?
  dogState.matches('request')
  // Context
  dogState.context
  // Data
  dogState.context.data <- Your data here
  return ....
}
```

#### Checking states

```javascript
import { useQueryMachine } from 'hooks/useQueryMachine'

const [queryMachine] = useQueryMachine()
const [dogState, { onGet }] = queryMachine<IDogResponse>()

// Request to get a random image
onGet('/breeds/image/random')


// isFailure?
dogState.matches('failure')
// isIdle?
dogState.matches('idle')
// isRequest?
dogState.matches('request')
// isSuccess?
dogState.matches('success')
```

##### Or you can check directly

```javascript
import { useQueryMachine } from 'hooks/useQueryMachine'

const [queryMachine] = useQueryMachine()
const [dogState, { isFailure, isIdle, isRequest, isSuccess }] =
  queryMachine<IDogResponse>()
```

#### Where are errors?

```javascript
import { useQueryMachine } from 'hooks/useQueryMachine'

const [queryMachine] = useQueryMachine()
const [dogState, { onGet, isFailure }] =  queryMachine<IDogResponse>()

// Request to get a random image, but the dog runs away?
onGet('/breeds/image/random')

// Check status here
dogState.matches('failure') <- First way to check failure
isFailure <- Second way to check failure

// Get errors here
dogState.context.error <- AxiosError
```

#### Interceptors

```javascript
// apiBase from hooks

// Add a request interceptor
apiBase.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
apiBase.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
```

#### Custom request?

```javascript
import { useQueryMachine } from 'hooks/useQueryMachine'

const [queryMachine, apiBase] = useQueryMachine()
const [dogState, { send }] = queryMachine<IDogResponse>()

// Send custom request
send('REQUEST', {
  request: () => {
    // Do something here?
    const randomDogImage1 = apiBase.get('/breeds/image/random')
    // May do something here again?

    return randomDogImage1
  }
})

// Your data will be here
dogState.context.data
```

##### Multi requests

```javascript
// Your need to install axios
import axios from 'axios'
import { useQueryMachine } from 'hooks/useQueryMachine'

const [queryMachine, apiBase] = useQueryMachine()
const [dogState, { send }] = queryMachine<IDogResponse>()

// Send custom request
send('REQUEST', {
  request: () => {
    // Do something here?
    const randomDogImage1 = apiBase.get('/breeds/image/random')
    const randomDogImage2 = apiBase.get('/breeds/image/random')
    const randomDogImage3 = apiBase.get('/breeds/image/random')
    // May do something here again?

    return axios.all([randomDogImage1, randomDogImage2, randomDogImage3])
  }
})

// Data will be an array here
dogState.context.data
```

### Loader
```javascript
import { MachineLoader } from 'query-machine'
import { useQueryMachine } from 'hooks/useQueryMachine'
import { useEffectOnce } from 'react-use'

export const Home = () => {
  const [queryMachine] = useQueryMachine()
  const [dogState, { onGet }] = queryMachine<IDogResponse>()

  useEffectOnce(() => {
    onGet('/breeds/image/random')
  })

  return (
    <MachineLoader
      state={dogState}
      onLoading={() => // Your custom loading component, or you don't need to use this}
      onBuilder={data => {
        const { message } = data
        return <div>{message}</div>
      }}
    />
  )
}
```

### Additional information

```javascript
// AxiosError

export interface AxiosError<T = any> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse<T>;
  isAxiosError: boolean;
  toJSON: () => object;
}
```

```json
// AxiosResponse

{
  "url": "/breeds/image/random",
  "method": "get",
  "headers": {
    "Accept": "application/json, text/plain, */*"
  },
  "baseURL": "https://dog.ceo/api",
  "transformRequest": [null],
  "transformResponse": [null],
  "timeout": 0,
  "xsrfCookieName": "XSRF-TOKEN",
  "xsrfHeaderName": "X-XSRF-TOKEN",
  "maxContentLength": -1,
  "maxBodyLength": -1,
  "transitional": {
    "silentJSONParsing": true,
    "forcedJSONParsing": true,
    "clarifyTimeoutError": false
  }
}
```

```json
// AxiosResponse[]

[
  {
    "data": {
      "message": "https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg",
      "status": "success"
    },
    "status": 200,
    "statusText": "",
    "headers": {
      "cache-control": "no-cache, private",
      "content-type": "application/json"
    },
    "config": {
      "url": "/breeds/image/random",
      "method": "get",
      "headers": {
        "Accept": "application/json, text/plain, */*"
      },
      "baseURL": "https://dog.ceo/api",
      "transformRequest": [null],
      "transformResponse": [null],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
      }
    },
    "request": {}
  },
  {
    "data": {
      "message": "https://images.dog.ceo/breeds/retriever-golden/Z6A_4500_200808.jpg",
      "status": "success"
    },
    "status": 200,
    "statusText": "",
    "headers": {
      "cache-control": "no-cache, private",
      "content-type": "application/json"
    },
    "config": {
      "url": "/breeds/image/random",
      "method": "get",
      "headers": {
        "Accept": "application/json, text/plain, */*"
      },
      "baseURL": "https://dog.ceo/api",
      "transformRequest": [null],
      "transformResponse": [null],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
      }
    },
    "request": {}
  }
]
```

### Credits

A special thanks to [XState](https://xstate.js.org/) and [Axios](https://axios-http.com/)

### License

MIT
