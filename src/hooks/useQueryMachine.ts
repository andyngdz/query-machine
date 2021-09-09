import { useMachine } from '@xstate/react'
import { AxiosInstance } from 'axios'
import { createRequests } from '../services'
import { requestMachine } from '../states'
import { IUseQueryMachine } from '../types'

export const useQueryMachine = <T>(
  axios: AxiosInstance
): IUseQueryMachine<T> => {
  const [state, send] = useMachine(requestMachine<T>())
  const requests = createRequests(axios, send)

  const isFailure = state.matches('failure')
  const isIdle = state.matches('idle')
  const isRequest = state.matches('request')
  const isSuccess = state.matches('success')

  return {
    ...requests,
    isIdle,
    isRequest,
    isSuccess,
    isFailure,
    send,
    state
  }
}
