import { AxiosInstance, AxiosResponse } from 'axios'
import { IUseQueryMachineCoreReturn } from '../types'
export declare const useQueryMachineCore: <T, R = AxiosResponse<T>>(
  axios: AxiosInstance
) => IUseQueryMachineCoreReturn<R>
