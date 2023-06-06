import { FC, ReactNode, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Portal } from '@vitus-labs/elements'
import { element } from '~/components/core'
import { Icon } from '~/components/base'

const IconWrapper = element.theme((t) => ({
  marginRight: t.spacing.large,
}))

const MenuWrapper = element
  .attrs({
    contentAlignY: 'top',
  })
  .theme((t) => ({
    fullScreen: true,
    paddingTop: 80,
    backgroundColor: t.layout.content.background,
    zIndex: 2,
    overflowY: 'scroll',
  }))

type Props = { children: ReactNode }

const Component: FC<Props> = ({ children }) => {
  const router = useRouter()
  const [active, setActive] = useState(false)

  const handleOpen = () => {
    setActive((prev) => !prev)
  }

  useEffect(() => {
    const handleRouteChange = () => {
      setActive(false)
    }

    router.events.on('routeChangeStart', () => {
      handleRouteChange()
    })

    router.events.on('hashChangeStart', () => {
      handleRouteChange()
    })

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('hashChangeStart', handleRouteChange)
    }
  }, [router])

  // handle closing only when content is active
  useEffect(() => {
    if (!active) return undefined

    const handleEscKey = (e: any) => {
      if (e.key === 'Escape') {
        setActive(false)
      }
    }

    window.addEventListener('keydown', handleEscKey)

    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  }, [active])

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = ''
    }
  }, [active])

  return (
    <>
      <IconWrapper>
        <Icon name={active ? 'close' : 'menu'} onClick={handleOpen} />
      </IconWrapper>
      {active && (
        <Portal>
          <MenuWrapper>{children}</MenuWrapper>
        </Portal>
      )}
    </>
  )
}

export default Component
