import { FC } from 'react'
import { ExtractProps } from '~/types'
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
  height: 400,
  overflowX: 'hidden',
  backgroundColor: 'transparent',
})).variants({
  compact: {
    height: '',
    maxHeight: 400,
  },
})

const Inner = Box.theme((t) => ({
  height: 'inherit',
  paddingY: t.spacing.large,
  paddingLeft: t.spacing.large,
  paddingRight: t.spacing.large + 20,
  fontSize: t.fontSize.medium,
  borderRadius: t.borderRadius.md,
  overflowY: 'auto',
  width: `calc(100% + 20px)`,
}))

type Props = ExtractProps<typeof Inner> & { compact?: boolean }

const component: FC<Props> = ({ compact, ...props }) => (
  <Wrapper compact={compact}>
    <Inner {...props} />
  </Wrapper>
)

component.displayName = 'base/Editor/ContentBox'

export default component
