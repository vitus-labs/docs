import React from 'react'
import { LivePreview } from 'react-live'
import box from '../../Box'

const Box = box.theme((t) => ({
  paddingX: 8,
  paddingY: 8,
  borderRadius: 0,
  hover: undefined,
  backgroundColor: 'transparent',
}))

const component = (props) => (
  <Box>
    <LivePreview {...props} />
  </Box>
)

export default component
