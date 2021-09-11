import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { IUseQueryMachine } from '../types'
import { useQueryMachineCore } from './useQueryMachineCore'

export const useCreateQueryMachine = (
  axios: AxiosInstance
): IUseQueryMachine => {
  const useQueryMachine = <T>() => useQueryMachineCore<T>(axios)

  return useQueryMachine
}
