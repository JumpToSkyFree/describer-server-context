import { useContext, useEffect } from 'react'
import ServerContext from '../contexts/ServerContext'

export default function useRegisterServerContext<ContextType>(
  id: string,
  data: ContextType
) {
  const serverContext = useContext(ServerContext)

  if (!serverContext) throw Error(`Server context is not initialized.`)

  useEffect(() => {
    serverContext.updateContext((old) => {
      old[id] = data
    })
  }, [data])
}
