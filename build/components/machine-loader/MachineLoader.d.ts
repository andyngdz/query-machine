/// <reference types="react" />
import { AxiosResponse } from 'axios'
import { TValueChanged, TState } from '../../types'
interface IMachineLoaderProps<T> {
  state: TState<AxiosResponse<T>>
  onBuilder: TValueChanged<T, React.ReactElement>
  onLoading?: TValueChanged<void, React.ReactElement>
}
export declare const MachineLoader: <T>({
  state,
  onBuilder,
  onLoading,
  ...restProps
}: IMachineLoaderProps<T>) => React.ReactElement
export {}
