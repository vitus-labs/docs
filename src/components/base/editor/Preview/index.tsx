import React from 'react'
import { LivePreview } from 'react-live'
import box from '../../Box'

const Box = box.attrs({ tag: 'div' }).theme((t) => ({
  paddingX: t.spacing.small,
  paddingY: t.spacing.small,
  borderRadius: 0,
  hover: undefined,
  backgroundColor: `rgba(255,255,255, 0.1)`,
  borderWidth: 1,
  borderColor: `rgba(255,255,255, 0.1)`,
  borderStyle: 'solid',
}))

const component = (props) => <LivePreview Component={Box} {...props} />

export default component
