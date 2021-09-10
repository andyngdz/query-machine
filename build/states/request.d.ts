import { IRequestMachineContext, TRequestMachineEvent, TRequestMachineState } from '../types';
export declare const requestMachine: <R>() => import("xstate").StateMachine<IRequestMachineContext<R>, any, TRequestMachineEvent<R>, TRequestMachineState<R>, import("xstate").ActionObject<IRequestMachineContext<R>, TRequestMachineEvent<R>>>;
