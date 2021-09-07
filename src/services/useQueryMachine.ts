import { AxiosInstance, AxiosRequestConfig } from 'axios'

export const useQueryMachine = (axiosBase: AxiosInstance) => {
  const onGet = (url: string, config?: AxiosRequestConfig) => {
    const request = axiosBase.get(url, config)
  }

  return { onGet }
}
