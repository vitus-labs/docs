import { FC } from 'react'
import { element } from '~/components/core'

const Wrapper = element
  .attrs({
    contentAlignX: 'block',
  })
  .theme({
    maxWidth: '100%',
    overflowX: 'scroll',
  })

const InnerTable = element
  .config({ name: 'base/Table/Table', component: 'table' })
  .styles(
    (css) =>
      css`
        border-spacing: 0;
      `
  )

const Component: FC = (props) => (
  <Wrapper>
    <InnerTable {...props} />
  </Wrapper>
)

export default element.config({ component: Component })
