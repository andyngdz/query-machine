import { IUseQueryMachine } from '../hooks'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
export declare const useAxiosQueryMachine: <T>(
  config?: AxiosRequestConfig | undefined
) => [IUseQueryMachine<T>, AxiosInstance]
