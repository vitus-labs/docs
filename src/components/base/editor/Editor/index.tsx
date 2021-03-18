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

const Wrapper = Box.theme({
  overflowX: 'hidden',
})

const Inner = Box.theme({
  overflowY: 'auto',
  width: `calc(100% + 20px)`,
})

const component = (props) => (
  <Wrapper>
    <Inner>
      <LiveEditor
        {...props}
        style={{
          overflow: 'auto',
          width: '100%',
          marginRight: -999,
        }}
      />
    </Inner>
  </Wrapper>
)

export default component
