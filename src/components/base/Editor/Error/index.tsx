import React, { VFC } from 'react'
import { LiveError } from 'react-live'
import box from '../../Box'

const Box = box
  .attrs({
    tag: 'div',
    contentAlignX: 'left',
  })
  .theme((t) => ({
    hideEmpty: true,
    paddingX: t.spacing.small,
    paddingY: t.spacing.small,
    borderRadius: 0,
    hover: undefined,
    backgroundColor: 'red',
  }))

const component: VFC = (props) => (
  <Box>
    <LiveError {...props} />
  </Box>
)

export default component
