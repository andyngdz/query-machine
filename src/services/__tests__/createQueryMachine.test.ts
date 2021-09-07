import { createQueryMachine } from 'services'

describe('createQueryMachine', () => {
  test('Should able to create query machine', () => {
    const { queryMachine } = createQueryMachine({
      baseURL: 'https://randomfox.ca'
    })

    console.info(queryMachine)
  })
})
