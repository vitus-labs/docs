import { FC } from 'react'
import { ExtractProps } from '~/types'
import box from '../../Box'

const Box = box
  .attrs({
    tag: 'div',
    contentAlignX: 'left',
    contentAlignY: 'top',
    state: 'dark',
  })
  .theme((t) => ({
    paddingX: t.spacing.reset,
    paddingY: t.spacing.reset,
    hover: null,
  }))

const Wrapper = Box.theme({
  height: 400,
  overflowX: 'hidden',
  backgroundColor: 'transparent',
}).variants({
  compact: {
    height: null,
    maxHeight: 400,
  },
})

const Inner = Box.theme((t) => ({
  height: 'inherit',
  paddingY: t.spacing.large,
  paddingLeft: t.spacing.large,
  paddingRight: t.spacing.large + 20,
  fontFamily: t.fontFamily.mono,
  fontSize: { xs: t.fontSize.small, md: t.fontSize.medium },
  borderRadius: t.borderRadius.medium,
  overflowY: 'auto',
  width: t.size.hideScrollBar,
})).variants({
  resetIndent: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
})

type Props = ExtractProps<typeof Inner> & {
  compact?: boolean
  resetIndent?: boolean
}

const Component: FC<Props> = ({ compact, resetIndent, ...props }) => (
  <Wrapper compact={compact}>
    <Inner resetIndent={resetIndent} {...props} />
  </Wrapper>
)

Component.displayName = 'base/Editor/ContentBox'

export default Component
