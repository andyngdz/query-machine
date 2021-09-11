import { AxiosResponse } from 'axios'
import { Interpreter, State } from 'xstate'
import {
  ICreateRequests,
  IRequestMachineContext,
  TRequestMachineEvent,
  TRequestMachineState
} from './request'

export type TSend<T> = Interpreter<
  IRequestMachineContext<T>,
  TRequestMachineState<T>,
  TRequestMachineEvent<T>
>['send']

export type TState<T> = State<
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

export type IUseQueryMachineCoreReturn<R> = [TState<R>, IUseQueryMachineCore<R>]

export type IUseQueryMachine = <T>() => IUseQueryMachineCoreReturn<
  AxiosResponse<T>
>
