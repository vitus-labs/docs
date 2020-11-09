import React from 'react'
import Link from 'next/link'
import routes from '~/core/routes'

export default (WrappedComponent) => {
  const Enhance = ({
    href,
    prefetch = false,
    replace,
    scroll,
    shallow,
    ...props
  }) => {

    const goTo = () => {
      if (typeof href === 'function') return href(routes as typeof routes)
      if (typeof href === 'string') return href

      return undefined
    }

    const result = <WrappedComponent href={goTo()} {...props} />

    if (!href) return result

    return (
      <Link
        href={goTo()}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
      >
        {result}
      </Link>
    )
  }

  return Enhance
}
