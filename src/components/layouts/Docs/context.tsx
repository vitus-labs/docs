import {
  createContext,
  useEffect,
  useContext,
  useState,
  VFC,
  FC,
  ComponentType,
} from 'react'
import { ExtractProps } from '~/types'

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

// --------------------------------------------------------
// CONTEXT
// --------------------------------------------------------
export const Context = createContext<ContextTypes>({})

// --------------------------------------------------------
// PROVIDER
// --------------------------------------------------------
export const Provider: FC = ({ children }) => {
  // const { route } = useRouter()
  const [state, setState] = useState({})

  const registerLink = ({ title, link }: Link) => {
    data[link] = { title, link: `#${link}` }
    setState(data)
  }

  const unregisterLink = ({ link }: Pick<Link, 'link'>) => {
    delete data[link]
    setState(data)
  }

  const serializeLinks = () => {
    return Object.values(state) as any
  }

  return (
    <Context.Provider
      value={{ links: serializeLinks(), registerLink, unregisterLink }}
    >
      {children}
    </Context.Provider>
  )
}

// --------------------------------------------------------
// HOC
// --------------------------------------------------------

type Props = {
  children: string
  name: string
}

type RegisterLinks = (
  WrappedComponent: ComponentType<Props>
) => VFC<ExtractProps<typeof WrappedComponent>>
export const registerLinks: RegisterLinks = (WrappedComponent) => ({
  children,
  ...props
}) => {
  const { registerLink, unregisterLink } = useContext(Context)

  const link = children.split(' ').join('-').toLowerCase().replace('&', 'and')

  useEffect(() => {
    if (children) registerLink({ title: children, link })

    return () => unregisterLink({ link })
  }, [children])

  return (
    <WrappedComponent {...props} name={link}>
      {children}
    </WrappedComponent>
  )
}
