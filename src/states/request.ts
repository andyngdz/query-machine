import { AxiosResponse } from 'axios'
import { createMachine, DoneInvokeEvent, assign } from 'xstate'

export interface IRequestMachineContext<T> {
  data: T
}

export const requestMachine = <T>() =>
  createMachine<IRequestMachineContext<T>>({
    initial: 'idle',

    states: {
      idle: {
        on: {
          REQUEST: 'request'
        }
      },

      request: {
        invoke: {
          src: (_, event) => {
            const { request } = event
            return request()
          },
          onDone: {
            actions: assign((_, event: DoneInvokeEvent<AxiosResponse<T>>) => {
              const { data } = event.data
              return { data }
            })
          },
          onError: {
            actions: (context, event) => {
              console.info(event)
            }
          }
        }
      }
    }
  })
