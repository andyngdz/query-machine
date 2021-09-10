import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IUseQueryMachine } from '../types'
export declare const useAxiosQueryMachine: <T>(
  config?: AxiosRequestConfig | undefined
) => [IUseQueryMachine<AxiosResponse<T>>, AxiosInstance]
