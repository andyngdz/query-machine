import { IRequestMachineContext, TRequestMachineEvent, TRequestMachineState } from '../types';
export declare const requestMachine: <T>() => import("xstate").StateMachine<IRequestMachineContext<T>, any, TRequestMachineEvent<T>, TRequestMachineState<T>, import("xstate").ActionObject<IRequestMachineContext<T>, TRequestMachineEvent<T>>>;
