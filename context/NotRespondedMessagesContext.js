'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import getNotRespondedMessageCount from '@/app/actions/getNotRespondedMessagesCount'
import { useSession } from 'next-auth/react'

const NotRespondedMessagesContext = createContext()

export function NotRespondedMessagesProvider({ children }) {
  const [notRespondedCount, setNotRespondedCount] = useState(0)

  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      getNotRespondedMessageCount().then((response) => {
        if (response.count) {
          setNotRespondedCount(response.count)
        }
      })
    }
  }, [getNotRespondedMessageCount, session])

  return (
    <NotRespondedMessagesContext.Provider
      value={{ notRespondedCount, setNotRespondedCount }}
    >
      {children}
    </NotRespondedMessagesContext.Provider>
  )
}

export function useNotRespondedMessagesContext() {
  return useContext(NotRespondedMessagesContext)
}
