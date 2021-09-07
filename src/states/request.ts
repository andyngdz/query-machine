import { AxiosResponse } from 'axios'
import { createMachine } from 'xstate'

export const requestMachine = <T>(request: Promise<AxiosResponse<T>>) =>
  createMachine({
    initial: 'request',

    states: {
      request: {
        invoke: {
          src: () => request,
          onDone: {
            actions: (context, event) => {
              console.info(context, event)
            }
          }
        }
      }
    }
  })
