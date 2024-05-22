'use client'
import getNotRespondedMessageCount from '@/app/actions/getNotRespondedMessagesCount'
import { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

const GlobalContext = createContext()

export function GlobalProvider({ children }) {
  const [notRespondedCount, setNotRespondedCount] = useState(0)

  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      getNotRespondedMessageCount().then((res) => {
        if (res.count) setNotRespondedCount(res.count)
      })
    }
  }, [getNotRespondedMessageCount, session])

  return (
    <GlobalContext.Provider value={{ notRespondedCount, setNotRespondedCount }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}
