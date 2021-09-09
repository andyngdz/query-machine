import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { useQueryMachine } from '../hooks'
import { IUseQueryMachine } from '../types'

export const useAxiosQueryMachine = <T>(
  config?: AxiosRequestConfig
): [IUseQueryMachine<T>, AxiosInstance] => {
  const baseAxios = axios.create(config)
  const queryMachine = useQueryMachine<T>(baseAxios)

  return [queryMachine, baseAxios]
}
