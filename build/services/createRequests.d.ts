import { AxiosInstance } from 'axios';
import { ICreateRequests, TSend } from '../types';
export declare const createRequests: <T>(axios: AxiosInstance, send: (event: import("xstate").SingleOrArray<import("xstate").Event<import("../types").TRequestMachineEvent<T>>> | import("xstate").SCXML.Event<import("../types").TRequestMachineEvent<T>>, payload?: import("xstate").EventData | undefined) => import("xstate").State<import("../types").IRequestMachineContext<T>, import("../types").TRequestMachineEvent<T>, import("../types").TRequestMachineState<T>, {
    value: any;
    context: import("../types").IRequestMachineContext<T>;
}>) => ICreateRequests;
