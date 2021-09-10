import { AxiosInstance, AxiosResponse } from 'axios';
import { IUseQueryMachine } from '../types';
export declare const useQueryMachine: <T, R = AxiosResponse<T>>(axios: AxiosInstance) => IUseQueryMachine<R>;
