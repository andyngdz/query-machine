import { AxiosRequestConfig } from 'axios'

export type TRequest<R> = () => Promise<R>

export type TNormalRequest = (url: string, config?: AxiosRequestConfig) => void

export type TDataRequest = <D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig
) => void
