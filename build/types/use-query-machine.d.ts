import { AxiosResponse } from 'axios'
import { Interpreter, State } from 'xstate'
import {
  ICreateRequests,
  IRequestMachineContext,
  TRequestMachineEvent,
  TRequestMachineState
} from './request'
export declare type TSend<T> = Interpreter<
  IRequestMachineContext<T>,
  TRequestMachineState<T>,
  TRequestMachineEvent<T>
>['send']
export declare type TState<T> = State<
  IRequestMachineContext<T>,
  TRequestMachineEvent<T>,
  TRequestMachineState<T>
>
export interface IUseQueryMachineCore<T> extends ICreateRequests {
  isFailure: boolean
  isIdle: boolean
  isRequest: boolean
  isSuccess: boolean
  send: TSend<T>
}
export declare type IUseQueryMachineCoreReturn<R> = [
  TState<R>,
  IUseQueryMachineCore<R>
]
export declare type IUseQueryMachine = <T>() => IUseQueryMachineCoreReturn<
  AxiosResponse<T>
>
