import { TopMenu } from '~/components/base/layout'
import { Container } from '~/components/base/grid'
import base from '~/components/base/Base'
import Logo from '~/components/base/Logo'
import Icon from '~/components/base/Icon'

const Wrapper = base.theme((t) => ({
  paddingX: { xs: t.spacing.large, xxxl: t.spacing.reset },
}))

const component = ({ transparent = false }) => (
  <TopMenu transparent={transparent}>
    <Container
      width={{
        xs: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xxl: '100%',
        xxxl: 1560,
      }}
    >
      <Wrapper
        gap={16}
        beforeContent={Logo}
        afterContent={
          <Icon name="github" href="https://github.com/vitus-labs" />
        }
        contentAlignX="right"
      />
    </Container>
  </TopMenu>
)

export default component
