import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IUseQueryMachine } from '../types';
export declare const useAxiosQueryMachine: <T>(config?: AxiosRequestConfig | undefined) => [IUseQueryMachine<T>, AxiosInstance];
