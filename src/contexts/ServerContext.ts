import { createContext, Dispatch, SetStateAction } from 'react'

export interface IServerContext {
  contexts: {
    [id: string]: any
  }
  updateContext: Dispatch<
    SetStateAction<{
      [id: string]: any
    }>
  >
}

const ServerContext = createContext<IServerContext | null>(null)

export default ServerContext
