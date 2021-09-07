import { AxiosResponse } from 'axios'
import { useMachine } from '@xstate/react'
import { requestMachine } from 'states'

export const createState = <T>(request: Promise<AxiosResponse<T>>) => {
  const [state, send] = useMachine(requestMachine(request))

  return { state, send }
}
