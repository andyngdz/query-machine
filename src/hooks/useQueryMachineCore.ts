import { useMachine } from '@xstate/react'
import { AxiosInstance, AxiosResponse } from 'axios'
import { createRequests } from '../services'
import { requestMachine } from '../states'
import { IUseQueryMachineCoreReturn } from '../types'

export const useQueryMachineCore = <T, R = AxiosResponse<T>>(
  axios: AxiosInstance
): IUseQueryMachineCoreReturn<R> => {
  const [state, send] = useMachine(requestMachine<R>())
  const requests = createRequests(axios, send)

  const isFailure = state.matches('failure')
  const isIdle = state.matches('idle')
  const isRequest = state.matches('request')
  const isSuccess = state.matches('success')

  return [
    state,
    {
      ...requests,
      isIdle,
      isRequest,
      isSuccess,
      isFailure,
      send
    }
  ]
}
