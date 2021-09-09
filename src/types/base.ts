import { AxiosRequestConfig, AxiosResponse } from 'axios'

export type TRequest = (url: string, config?: AxiosRequestConfig) => void

export type TRequestResponse<T> = () => Promise<AxiosResponse<T>>
