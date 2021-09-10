import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IUseQueryMachine } from '../types'
import { useQueryMachine } from './useQueryMachine'

export const useAxiosQueryMachine = <T>(
  config?: AxiosRequestConfig
): [IUseQueryMachine<AxiosResponse<T>>, AxiosInstance] => {
  const baseAxios = axios.create(config)
  const queryMachine = useQueryMachine<T>(baseAxios)

  return [queryMachine, baseAxios]
}
