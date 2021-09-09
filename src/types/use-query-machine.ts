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

export interface IUseQueryMachine<T> extends ICreateRequests {
  isFailure: boolean

  isIdle: boolean

  isRequest: boolean

  isSuccess: boolean

  state: TState<T>

  send: TSend<T>
}
