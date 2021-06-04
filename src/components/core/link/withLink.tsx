import { FC, ComponentType } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import routes from '~/core/routes'

export type Props = Partial<{
  href: string | ((r: typeof routes) => any)
  external: boolean
  prefetch: boolean
  replace: boolean
  scroll: boolean
  shallow: boolean
}>

const component = (
  WrappedComponent: ComponentType<Partial<{ active: boolean; href: string }>>
) => {
  const Enhance: FC<Props> = ({
    href,
    prefetch = false,
    replace,
    scroll,
    shallow,
    ...props
  }) => {
    const { asPath } = useRouter()

    if (!href) return <WrappedComponent {...props} />

    const goTo = () => {
      if (typeof href === 'string') return href
      if (typeof href === 'function') return href(routes)

      return ''
    }

    const destination = goTo()
    const externalProps = destination.startsWith('http')
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
          active={asPath === destination}
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
