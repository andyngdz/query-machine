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

### Quick start

```
import { useAxiosQueryMachine } from 'query-machine'

// Create a new instance
const [{state, onGet }] = useAxiosQueryMachine<IDogResponse>({
  baseURL: 'https://dog.ceo/api'
})

// Request to get a random image
onGet('/breeds/image/random')

// Check state, context
// isRequest?
state.matches('request')
// Context
state.context
// Data
state.context.data <- Your data here
```

### Example

#### Checking states

```
import { useAxiosQueryMachine } from 'query-machine'

// Create a new instance
const [{state, onGet }] = useAxiosQueryMachine<IDogResponse>({
  baseURL: 'https://dog.ceo/api'
})

// Request to get a random image
onGet('/breeds/image/random')

// isFailure?
state.matches('failure')
// isIdle?
state.matches('idle')
// isRequest?
state.matches('request')
// isSuccess?
state.matches('success')
```

##### Or you can check directly

```
import { useAxiosQueryMachine } from 'query-machine'

// Create a new instance
const [{
	state,
	onGet,
	isFailure,
	isIdle,
	isRequest,
	isSuccess
}] = useAxiosQueryMachine<IDogResponse>({
  baseURL: 'https://dog.ceo/api'
})
```

#### Where are errors?

```
import { useAxiosQueryMachine } from 'query-machine'

// Create a new instance
const [{state, onGet, isFailure }] = useAxiosQueryMachine<IDogResponse>({
  baseURL: 'https://dog.ceo/api'
})

// Request to get a random image, but the dog runs away?
onGet('/breeds/image/random')

// Check errors here
state.matches('failure') or isFailure
state.context.error <- AxiosError
```

#### Interceptors

```
import { useAxiosQueryMachine } from 'query-machine'

// Create a new instance
const [{state, onGet, onPost,.... }, apiBase] = useAxiosQueryMachine<IDogResponse>({
  baseURL: 'https://dog.ceo/api'
})

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

```
import { useAxiosQueryMachine } from 'query-machine'

// Create a new instance
const [{ state,  send },  apiBase] =  useAxiosQueryMachine({
	baseURL:  'https://dog.ceo/api'
})

// Send custom request
send('REQUEST', {
	request: () => {
    // Do something here?
    const  randomDogImage1  =  apiBase.get('/breeds/image/random')
    // May do something here again?

    return  randomDogImage1
	}
})

// Your data will be here
state.context.data
```

```
// Your need to install axios
import axios from 'axios'
import { useAxiosQueryMachine } from 'query-machine'

// Create a new instance
const [{ state, send }, apiBase] = useAxiosQueryMachine({
	baseURL: 'https://dog.ceo/api'
})

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
state.context.data
```

### Additional information

```
// AxiosError

export  interface  AxiosError<T  =  any> extends  Error {
	config:  AxiosRequestConfig;
	code?:  string;
	request?:  any;
	response?:  AxiosResponse<T>;
	isAxiosError:  boolean;
	toJSON: () =>  object;
}
```

```
AxiosResponse

{
  "url": "/breeds/image/random",
  "method": "get",
  "headers": {
      "Accept": "application/json, text/plain, */*"
  },
  "baseURL": "https://dog.ceo/api",
  "transformRequest": [
      null
  ],
  "transformResponse": [
      null
  ],
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

```
AxiosResponse[]

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
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
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
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
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
