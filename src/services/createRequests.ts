import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ICreateRequests, TSend } from '../types'

export const createRequests = <T>(
  axios: AxiosInstance,
  send: TSend<T>
): ICreateRequests => {
  const onGet = (url: string, config?: AxiosRequestConfig) => {
    const request = () => axios.get<T>(url, config)
    send('REQUEST', { request })
  }

  const onDelete = (url: string, config?: AxiosRequestConfig) => {
    const request = () => axios.delete<T>(url, config)
    send('REQUEST', { request })
  }

  const onOptions = (url: string, config?: AxiosRequestConfig) => {
    const request = () => axios.options<T>(url, config)
    send('REQUEST', { request })
  }

  const onHead = (url: string, config?: AxiosRequestConfig) => {
    const request = () => axios.head<T>(url, config)
    send('REQUEST', { request })
  }

  const onPatch = <P>(url: string, data: P, config?: AxiosRequestConfig) => {
    const request = () => axios.patch<T>(url, data, config)
    send('REQUEST', { request })
  }

  const onPost = <P>(url: string, data: P, config?: AxiosRequestConfig) => {
    const request = () => axios.post<T>(url, data, config)
    send('REQUEST', { request })
  }

  const onPut = <P>(url: string, data: P, config?: AxiosRequestConfig) => {
    const request = () => axios.put<T>(url, data, config)
    send('REQUEST', { request })
  }

  return { onGet, onDelete, onOptions, onHead, onPatch, onPost, onPut }
}
