import { useMachine } from '@xstate/react'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { State } from 'xstate'
import { IRequestMachineContext, requestMachine } from '../states'
import { TRequest } from '../types'

export interface IUseQueryMachine<T> {
  state: State<IRequestMachineContext<T>>

  onGet: TRequest
}

export const useQueryMachine = <T>(
  axiosBase: AxiosInstance
): IUseQueryMachine<T> => {
  const [state, send] = useMachine(requestMachine<T>())

  const onGet = (url: string, config?: AxiosRequestConfig) => {
    const request = () => axiosBase.get<T>(url, config)
    send('REQUEST', { request })
  }

  return { state, onGet }
}
