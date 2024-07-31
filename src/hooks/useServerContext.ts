/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { IServerContext } from '../contexts/ServerContext'

export default function useServerContext(ctx: {
  initialValue?: IServerContext['contexts']
  dependencies?: Array<any>
}): [IServerContext['contexts'], IServerContext['updateContext']] {
  const [serverContext, setServerContexts] = useState<
    IServerContext['contexts']
  >(ctx.initialValue ?? {})

  useEffect(() => {
    if (ctx.initialValue) setServerContexts(ctx.initialValue)
  }, ctx.dependencies)

  return [serverContext as IServerContext['contexts'], setServerContexts]
}
