import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { IUseQueryMachine } from '../types'
import { useQueryMachineCore } from './useQueryMachineCore'

export const useCreateAxiosQueryMachine = (
  config?: AxiosRequestConfig
): [IUseQueryMachine, AxiosInstance] => {
  const baseAxios = axios.create(config)
  const useQueryMachine = <T>() => useQueryMachineCore<T>(baseAxios)

  return [useQueryMachine, baseAxios]
}
