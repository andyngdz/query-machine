import { useMachine } from '@xstate/react'
import { AxiosInstance, AxiosResponse } from 'axios'
import { createRequests } from '../services'
import { requestMachine } from '../states'
import { IUseQueryMachineCore } from '../types'

export const useQueryMachineCore = <T, R = AxiosResponse<T>>(
  axios: AxiosInstance
): IUseQueryMachineCore<R> => {
  const [state, send] = useMachine(requestMachine<R>())
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
