import React from 'react'
import Link from 'next/link'

export default (WrappedComponent) => {
  const Enhance = ({
    href,
    prefetch = false,
    replace,
    scroll,
    shallow,
    ...props
  }) => {
    const result = <WrappedComponent href={href} {...props} />

    if (!href) return result

    return (
      <Link
        href={href}
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
