import { useQueryMachine, IUseQueryMachine } from '../hooks'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const useAxiosQueryMachine = <T>(
  config?: AxiosRequestConfig
): [IUseQueryMachine<T>, AxiosInstance] => {
  const baseAxios = axios.create(config)
  const queryMachine = useQueryMachine<T>(baseAxios)

  return [queryMachine, baseAxios]
}
