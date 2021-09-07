import { useQueryMachine } from 'services'
import axios, { AxiosRequestConfig } from 'axios'

export const createQueryMachine = (config?: AxiosRequestConfig) => {
  const baseAxios = axios.create(config)
  const queryMachine = useQueryMachine(baseAxios)

  return { baseAxios, queryMachine }
}
