import { FC } from 'react'
import { Root } from '~/components/base/layout'
import { Container } from '~/components/base/grid'
import Content from '~/components/base/layout/Content'

const component: FC = ({ children }) => (
  <Root>
    <Content noGap>
      <Container>{children}</Container>
    </Content>
  </Root>
)

component.displayName = 'layouts/Base'

export default component
