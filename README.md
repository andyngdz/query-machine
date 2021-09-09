# Query Machine

## A combination of XState and Axios

### Features

- Provides both xstate/axios by core

## Installation

```
npm install query-machine
```

```
yarn install query-machine
```

```
import { useAxiosQueryMachine } from 'query-machine'

// Create a new instance
const [{state, onGet }] = useAxiosQueryMachine<IDogResponse>({
    baseURL: 'https://dog.ceo/api'
})

// Request to get a random image
onGet('/breeds/image/random')

// Check state, context
state.context
state.context.data <- Your data here
```

## License

MIT
