import React, { createContext, useState, FC } from 'react'

type Link = {
  title: string
  link: string
}

type ContextTypes = {
  links: Array<Link>
  registerLink: (args: { link: string; title: string }) => void
  unregisterLink: (args: { link: string }) => void
}

const data: Record<string, unknown> = {}

export const Context = createContext<Partial<ContextTypes>>({})

export const DocsLinksProvider: FC = ({ children }) => {
  // const { route } = useRouter()
  const [state, setState] = useState({})

  const registerLink = ({ title, link }: Link) => {
    data[link] = { title, link: `#${link}` }
    setState(data)
  }

  const unregisterLink = ({ link }) => {
    delete data[link]
    setState(data)
  }

  const serializeLinks = () => {
    return Object.values(state)
  }

  return (
    <Context.Provider
      value={{ links: serializeLinks(), registerLink, unregisterLink }}
    >
      {children}
    </Context.Provider>
  )
}
