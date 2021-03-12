import React from 'react'
import { LivePreview } from 'react-live'
import box from '../../Box'

const Box = box.attrs({ tag: 'div' }).theme((t) => ({
  paddingX: t.spacing.small,
  paddingY: t.spacing.small,
  borderRadius: 0,
  hover: undefined,
  backgroundColor: 'transparent',
}))

const component = (props) => <LivePreview Component={Box} {...props} />

export default component
