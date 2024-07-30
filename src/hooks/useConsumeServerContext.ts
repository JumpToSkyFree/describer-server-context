import { useContext } from 'react'
import ServerContext from '../contexts/ServerContext'

type UpdaterType<ContextType> = (old: ContextType) => ContextType

export default function useConsumeServerContext<ContextType>(
  id: string
): [ContextType, (updater: UpdaterType<ContextType>) => void, () => void] {
  const serverContext = useContext(ServerContext)
  if (!(serverContext && id in serverContext?.contexts))
    throw Error(
      `Can't consume a server context that is not initialized. Either try to pass context in parent components or assign ${id} identifier int he context.`
    )

  function update(updater: UpdaterType<ContextType>) {
    if (serverContext && id in serverContext.contexts) {
      serverContext.updateContext({
        ...serverContext.contexts,
        ...updater(serverContext.contexts[id])
      })
    }
  }

  function remove() {
    if (serverContext && id in serverContext.contexts) {
      delete serverContext.contexts[id]
      serverContext.updateContext(serverContext.contexts)
    }
  }

  return [serverContext.contexts[id] as ContextType, update, remove]
}
