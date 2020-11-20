import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import routes from '~/core/routes'

const component = (WrappedComponent) => {
  const Enhance = ({
    href,
    external,
    prefetch = false,
    replace,
    scroll,
    shallow,
    ...props
  }) => {
    const { route } = useRouter()

    if (!href) return <WrappedComponent {...props} />

    const goTo = () => {
      if (typeof href === 'string') return href
      if (typeof href === 'function') return href(routes as typeof routes)

      return undefined
    }

    const destination = goTo()
    const externalProps = external
      ? {
          rel: 'noopener noreferrer',
          target: '_blank',
        }
      : {}

    return (
      <Link
        href={destination}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
      >
        <WrappedComponent
          active={route === destination}
          href={destination}
          {...props}
          {...externalProps}
        />
      </Link>
    )
  }

  return Enhance
}

export default component
