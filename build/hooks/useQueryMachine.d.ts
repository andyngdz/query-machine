import { AxiosInstance } from 'axios';
import { IUseQueryMachine } from '../types';
export declare const useQueryMachine: <T>(axios: AxiosInstance) => IUseQueryMachine<T>;
