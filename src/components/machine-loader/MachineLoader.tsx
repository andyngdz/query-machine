import { AxiosResponse } from 'axios'
import { TValueChanged, TState } from '../../types'

interface IMachineLoaderProps<T> {
  state: TState<AxiosResponse<T>>

  onBuilder: TValueChanged<T, React.ReactElement>

  onLoading?: TValueChanged<void, React.ReactElement>
}

export const MachineLoader = <T,>({
  state,
  onBuilder,
  onLoading,
  ...restProps
}: IMachineLoaderProps<T>): React.ReactElement => {
  const { matches, context } = state
  const data = context.data?.data
  const loading = matches('request')

  if (data) {
    return onBuilder(data)
  }

  if (loading && onLoading) {
    return onLoading()
  }

  return <span>Loading</span>
}
