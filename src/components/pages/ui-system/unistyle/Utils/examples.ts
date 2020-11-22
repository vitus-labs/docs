export const breakpoints = `
import { breakpoints } from '@vitus-labs/unistyle'

// output
const output = {
  rootSize: 16,
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}
`

export const alignContent = `
import { alignContent } from '@vitus-labs/unistyle'

// output
const css = alignContent({
  direction: 'column',
  alignX: 'left',
  alignY: 'center'
})

// output
css\`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
\`
`

export const extendCss = `
// import { extendCss } from '@vitus-labs/unistyle'
import { css } from 'styled-components'

// this is how it looks
const extendedCss = (styles) => {
  if (!styles) return undefined
  if (typeof styles === 'function') {
    return styles(css)
  }

  return styles
}

// usage
const styles = css => css\`
  text-align: center;
\`

// this might be useful when you would like to pass styles as props
// without importing \`css\` function each time
const result = extendStyles(styles)
`
