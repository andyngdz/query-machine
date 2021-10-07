import { AxiosError } from 'axios'
import { assign, createMachine, DoneInvokeEvent } from 'xstate'
import {
  IRequestMachineContext,
  TRequestMachineEvent,
  TRequestMachineState
} from '../types'

const REQUEST_MACHINE_ACTIONS = {
  REQUEST: 'request'
}

export const requestMachine = <R>() =>
  createMachine<
    IRequestMachineContext<R>,
    TRequestMachineEvent<R>,
    TRequestMachineState<R>
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
            actions: assign((_, event: DoneInvokeEvent<R>) => {
              const { data } = event
              return { data }
            }),
            target: 'success'
          },

          onError: {
            actions: assign((_, event: DoneInvokeEvent<AxiosError>) => {
              const { data: error } = event
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
