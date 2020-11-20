import React from 'react'
import { LiveEditor } from 'react-live'
import box from '../../Box'

const Box = box
  .attrs({
    tag: 'div',
    contentAlignX: 'left',
    contentAlignY: 'top',
  })
  .theme((t) => ({
    padding: 8,
    paddingY: 8,
    borderRadius: 0,
    hover: undefined,
    fontSize: 14,
    height: 400,
    minHeight: 400,
  }))
  .styles(
    (css) => css`
      padding: 0;
    `
  )

const component = (props) => (
  <Box>
    <LiveEditor {...props} style={{ overflowY: 'scroll', width: '100%' }} />
  </Box>
)

export default component
