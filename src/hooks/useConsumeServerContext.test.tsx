/* eslint-disable no-unused-vars */
import React from 'react'
import ServerContext from '../contexts/ServerContext'
import useServerContext from './useServerContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useConsumeServerContext from './useConsumeServerContext'

function ServerContextIdConsumer() {
  const [context, update, remove] = useConsumeServerContext<{ data: string }>(
    'endpoint1'
  )

  return (
    <>
      <p>{context.data}</p>
      <button
        onClick={() =>
          update((old) => {
            return {
              data: 'something'
            }
          })
        }
      >
        Click here
      </button>
    </>
  )
}

function ServerIdContext() {
  const [contexts, updateContext] = useServerContext({
    endpoint1: {
      data: 'string'
    }
  })
  return (
    <ServerContext.Provider
      value={{
        contexts: contexts,
        updateContext
      }}
    >
      <ServerContextIdConsumer />
    </ServerContext.Provider>
  )
}

describe('Consume server context', () => {
  it('is containing data', () => {
    render(<ServerIdContext />)
    expect(screen.getByText('string')).toBeTruthy()
  })

  it('is updated', async () => {
    render(<ServerIdContext />)
    await userEvent.click(screen.getByText('Click here'))

    expect(screen.getByText('string')).toBeTruthy()
  })
})
