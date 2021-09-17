import { AxiosRequestConfig } from 'axios'
export declare type TValueChanged<T, R = void> = (value: T) => R
export declare type TRequest<R> = () => Promise<R>
export declare type TNormalRequest = (
  url: string,
  config?: AxiosRequestConfig
) => void
export declare type TDataRequest = <D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig
) => void
