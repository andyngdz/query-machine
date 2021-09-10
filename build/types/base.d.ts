import { AxiosRequestConfig, AxiosResponse } from 'axios';
export declare type TRequest<T> = () => Promise<AxiosResponse<T>>;
export declare type TNormalRequest = (url: string, config?: AxiosRequestConfig) => void;
export declare type TDataRequest = <P>(url: string, data: P, config?: AxiosRequestConfig) => void;
export declare type TRequestResponse<T> = Promise<AxiosResponse<T> | AxiosResponse<T>[]>;
