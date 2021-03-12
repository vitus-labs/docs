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
    maxHeight: 400,
    overflowY: 'auto',
    padding: t.spacing.small,
    paddingY: t.spacing.small,
    borderRadius: 0,
    hover: {},
    fontSize: t.fontSize.medium,
  }))

  .styles(
    (css) => css`
      padding: 0;
    `
  )

const component = (props) => (
  <Box>
    <LiveEditor
      {...props}
      style={{
        overflowY: 'auto',
        width: '100%',
      }}
    />
  </Box>
)

export default component
