import React from 'react'
import { LiveEditor } from 'react-live'
import box from '../../Box'

const Box = box
  .attrs({
    contentAlignX: 'left',
  })
  .theme((t) => ({
    paddingX: 8,
    paddingY: 8,
    borderRadius: 0,
    hover: undefined,
  }))

const component = (props) => (
  <Box>
    <LiveEditor {...props} />
  </Box>
)

export default component
