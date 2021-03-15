import { FC } from 'react'
import { Root } from '~/components/base/layout'
import { Container } from '~/components/base/grid'

const component: FC = ({ children }) => (
  <Root>
    <Container>{children}</Container>
  </Root>
)

component.displayName = 'layouts/Base'

export default component
