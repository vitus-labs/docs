import React from 'react'
import { LiveError } from 'react-live'
import box from '../../Box'

const Box = box
  .attrs({
    tag: 'div',
    contentAlignX: 'left',
  })
  .theme((t) => ({
    hideEmpty: true,
    paddingX: 8,
    paddingY: 8,
    borderRadius: 0,
    hover: undefined,
    backgroundColor: 'red',
  }))

const component = (props) => (
  <Box>
    <LiveError {...props} />
  </Box>
)

export default component