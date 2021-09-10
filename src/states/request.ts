import { assign, createMachine, DoneInvokeEvent } from 'xstate'
import {
  IRequestMachineContext,
  TRequestMachineEvent,
  TRequestMachineState,
  TRequestResponse
} from '../types'

const REQUEST_MACHINE_ACTIONS = {
  REQUEST: 'request'
}

export const requestMachine = <T>() =>
  createMachine<
    IRequestMachineContext<T>,
    TRequestMachineEvent<T>,
    TRequestMachineState<T>
  >({
    initial: 'idle',

    states: {
      idle: {
        on: REQUEST_MACHINE_ACTIONS
      },

      request: {
        invoke: {
          src: (_, event) => {
            const { request } = event
            return request()
          },

          onDone: {
            actions: assign(
              (_, event: DoneInvokeEvent<TRequestResponse<T>>) => {
                const { data } = event
                return { data }
              }
            ),
            target: 'success'
          },

          onError: {
            actions: assign((_, event) => {
              const { data: error } = event.data
              return { error }
            }),
            target: 'failure'
          }
        }
      },

      success: {
        on: REQUEST_MACHINE_ACTIONS
      },

      failure: {
        on: REQUEST_MACHINE_ACTIONS
      }
    }
  })
