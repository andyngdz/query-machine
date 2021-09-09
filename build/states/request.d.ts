export interface IRequestMachineContext<T> {
  data: T
}
export declare const requestMachine: <T>() => import('xstate').StateMachine<
  IRequestMachineContext<T>,
  any,
  import('xstate').AnyEventObject,
  {
    value: any
    context: IRequestMachineContext<T>
  },
  import('xstate').ActionObject<
    IRequestMachineContext<T>,
    import('xstate').AnyEventObject
  >
>
