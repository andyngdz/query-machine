import { AxiosError } from 'axios';
import { TDataRequest, TNormalRequest, TRequest, TRequestResponse } from './base';
import { TStateValues } from './state';
export declare type TRequestMachineEvent<T> = {
    type: 'REQUEST';
    request: TRequest<T>;
};
export declare type TRequestMachineState<T> = {
    value: TStateValues;
    context: IRequestMachineContext<T>;
};
export interface IRequestMachineContext<T> {
    data: TRequestResponse<T>;
    error: AxiosError;
}
export interface ICreateRequests {
    onDelete: TNormalRequest;
    onGet: TNormalRequest;
    onOptions: TNormalRequest;
    onHead: TNormalRequest;
    onPatch: TDataRequest;
    onPost: TDataRequest;
    onPut: TDataRequest;
}
