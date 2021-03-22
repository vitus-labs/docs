import React from 'react'
import { LivePreview } from 'react-live'
import box from '../../Box'

const Box = box
  .attrs({
    tag: 'div',
    contentAlignY: 'spaceBetween',
    contentAlignX: 'spaceBetween',
  })
  .theme((t) => ({
    paddingX: t.spacing.small,
    paddingY: t.spacing.small,
    borderRadius: t.borderRadius.md,
    backgroundColor: t.color.light[100],

    hover: {},
  }))
  .styles(
    (css) => css`
      & > *:not(:last-child) {
        margin-bottom: 12px;
      }
    `
  )

const component = ({ view = 'rows', ...props }) => {
  const Component = (props) => <Box {...props} contentDirection={view} />

  return <LivePreview Component={Component} {...props} />
}

export default component
