import { FC } from 'react'
import box from '../../Box'

const Box = box
  .attrs({
    tag: 'div',
    contentAlignX: 'left',
    contentAlignY: 'top',
  })
  .theme((t) => ({
    paddingX: t.spacing.reset,
    paddingY: t.spacing.reset,
    hover: {},
  }))

const Wrapper = Box.theme((t) => ({
  maxHeight: 400,
  overflowX: 'hidden',
  backgroundColor: 'transparent',
}))

const Inner = Box.theme({
  overflowY: 'auto',
  width: `calc(100% + 30px)`,
}).theme((t) => ({
  paddingY: t.spacing.small,
  paddingX: t.spacing.small,
  fontSize: t.fontSize.medium,
  borderRadius: t.borderRadius.md,
}))

const component: FC = ({ children }) => (
  <Wrapper>
    <Inner>{children}</Inner>
  </Wrapper>
)

component.displayName = 'base/Editor/ContentBox'

export default component
