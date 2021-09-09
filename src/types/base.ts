import { AxiosRequestConfig, AxiosResponse } from 'axios'

export type TRequest<T> = () => Promise<AxiosResponse<T>>

export type TNormalRequest = (url: string, config?: AxiosRequestConfig) => void

export type TDataRequest = <P>(
  url: string,
  data: P,
  config?: AxiosRequestConfig
) => void

export type TRequestResponse<T> = () => Promise<AxiosResponse<T>>
