import { useIsSmallViewport } from '~/hooks/useViewport'
import { TopMenu } from '~/components/layout'
import { Container } from '~/components/grid'
import { IconList, Logo } from '~/components/base'
import { element } from '~/components/core'
import Menu from './Menu'
import MobileMenu from './MobileMenu'

const Wrapper = element
  .attrs((_, t) => ({
    gap: t.spacing.large,
  }))
  .theme((t) => ({
    paddingX: { xs: t.spacing.large, md: t.spacing.reset },
  }))

const Component = ({ transparent = false }) => {
  const isSmallViewPort = useIsSmallViewport()

  return (
    <TopMenu transparent={transparent}>
      <Container>
        <Wrapper
          beforeContent={
            <>
              {isSmallViewPort && <MobileMenu />}
              <Logo />
            </>
          }
          content={!isSmallViewPort ? Menu : null}
          afterContent={
            <IconList
              gap="xl"
              data={[
                { name: 'github', href: 'https://github.com/vitus-labs' },
                { name: 'twitter', href: 'https://twitter.com/VitusLabs' },
              ]}
            />
          }
          contentAlignX="right"
        />
      </Container>
    </TopMenu>
  )
}

export default Component
