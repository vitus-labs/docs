import React, { useContext, useEffect } from 'react'
import { Context } from '~/components/docs/context/DocsLinks'

type Props = {
  title: string
  children: React.ReactNode
}

const component = (WrappedComponent) => {
  const Enhanced = ({ title, ...props }: Props) => {
    const { registerLink, unregisterLink } = useContext(Context)
    const link = title.split(' ').join('-').toLowerCase().replace('&', 'and')

    useEffect(() => {
      registerLink({ title, link })

      return () => unregisterLink({ link })
    }, [title])

    return <WrappedComponent {...props} title={title} name={link} />
  }

  return Enhanced
}

export default component
