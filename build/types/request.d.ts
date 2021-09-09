import { AxiosRequestConfig, AxiosResponse } from 'axios'
export declare type TRequest = (
  url: string,
  config?: AxiosRequestConfig
) => void
export declare type TRequestResponse<T> = () => Promise<AxiosResponse<T>>
