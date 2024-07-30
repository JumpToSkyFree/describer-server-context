/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { IServerContext } from '../contexts/ServerContext'

export default function useServerContext(
  initialValue?: IServerContext['contexts']
): [IServerContext['contexts'], IServerContext['updateContext']] {
  const [serverContext, setServerContext] = useState<
    IServerContext['contexts']
  >(initialValue ?? {})

  return [serverContext as IServerContext['contexts'], setServerContext]
}
