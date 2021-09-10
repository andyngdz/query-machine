import { AxiosError } from 'axios'
import { TDataRequest, TNormalRequest, TRequest } from './base'
import { TStateValues } from './state'
export declare type TRequestMachineEvent<R> = {
  type: 'REQUEST'
  request: TRequest<R>
}
export declare type TRequestMachineState<R> = {
  value: TStateValues
  context: IRequestMachineContext<R>
}
export interface IRequestMachineContext<R> {
  data?: R
  error?: AxiosError
}
export interface ICreateRequests {
  onDelete: TNormalRequest
  onGet: TNormalRequest
  onOptions: TNormalRequest
  onHead: TNormalRequest
  onPatch: TDataRequest
  onPost: TDataRequest
  onPut: TDataRequest
}
