import React from 'react'
import { LivePreview } from 'react-live'
import box from '../../Box'

const Box = box
  .attrs({
    tag: 'div',
    contentAlignY: 'top',
    contentAlignX: 'spaceBetween',
  })
  .theme((t) => ({
    paddingX: t.spacing.small,
    paddingY: t.spacing.small,
    borderRadius: 0,
    hover: undefined,
    backgroundColor: `rgba(255,255,255, 0.1)`,
    borderWidth: 1,
    borderColor: `rgba(255,255,255, 0.1)`,
    borderStyle: 'solid',
  }))

const component = ({ view = 'rows', ...props }) => {
  const Component = (props) => <Box {...props} contentDirection={view} />

  return <LivePreview Component={Component} {...props} />
}

export default component
