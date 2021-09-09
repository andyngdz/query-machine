import { AxiosInstance } from 'axios'
import { State } from 'xstate'
import { IRequestMachineContext } from '../states'
import { TRequest } from '../types'
export interface IUseQueryMachine<T> {
  state: State<IRequestMachineContext<T>>
  onGet: TRequest
}
export declare const useQueryMachine: <T>(
  axiosBase: AxiosInstance
) => IUseQueryMachine<T>
