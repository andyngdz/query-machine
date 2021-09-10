import { Interpreter, State } from 'xstate'
import {
  ICreateRequests,
  IRequestMachineContext,
  TRequestMachineEvent,
  TRequestMachineState
} from './request'
export declare type TSend<R> = Interpreter<
  IRequestMachineContext<R>,
  TRequestMachineState<R>,
  TRequestMachineEvent<R>
>['send']
export declare type TState<R> = State<
  IRequestMachineContext<R>,
  TRequestMachineEvent<R>,
  TRequestMachineState<R>
>
export interface IUseQueryMachine<R> extends ICreateRequests {
  isFailure: boolean
  isIdle: boolean
  isRequest: boolean
  isSuccess: boolean
  state: TState<R>
  send: TSend<R>
}
