export const usage = `
// import { styles } from '@vitus-labs/unistyle'
import { css } from 'styled-components'

// https://snook.ca/archives/html_and_css/font-size-with-rem
const css = styles({
  theme: {},
  css,
  rootSize: 16 // default size for REM calculation
})
`

export const usageExample = `
import { styles } from '@vitus-labs/unistyle'
import { css } from 'styled-components'

const css = styles({
  theme: {
    borderWidth: 1,
    fontSize: 14,
    paddingX: 8,
    marginY: 4,
    hideEmpty: true,
  },
  css,
  rootSize: 16
})

// the output will be
const output = css\`
  font-size: 0.875rem; // 14px
  padding-left: 0.5rem; // 8px
  padding-right: 0.5rem; // 8px
  margin-top: 0.25rem; // 4px
  margin-bottom: 0.25rem; // 4px
  border-width: 1px; // doesn't convert border value

  \${css\`
    &:empty {
      display: none;
    }
  \`}
\`
`

export const prioritization = `
import { styles } from '@vitus-labs/unistyle'
import { css } from 'styled-components'

// padding example
const css = styles({
  theme: {
    padding: 16,
    paddingX: 8,
    paddingLeft: 4
  },
  css,
  rootSize: 16
})

// the output will be
// priorities are (from highest):
// paddingLeft → paddingX → padding
const output = css\`
  padding: 1rem; // 16px
  padding-right: 0.5rem; // 8px (paddingX is more specific than padding)
  padding-left: 0.25rem; // 4px (paddingLeft is more specific than paddingX)
\`

// border radius example
const css = styles({
  theme: {
    borderRadiusTopLeft: 16,
    borderRadiusLeft: 8,
    borderRadiusTop: 4
  },
  css,
  rootSize: 16
})

// the output will be
// priorities are (from highest):
// borderRadiusTopLeft → borderRadiusLeft → borderRadiusTop
const output = css\`
  border-top-right-radius: 1rem; // 16px
  border-bottom-left-radius: 0.5rem; // 8px
  border-top-left-radius: 0.25rem; // 16 → 8 → 4px
\`
`

export const extendCss = `
import { styles } from '@vitus-labs/unistyle'
import { css } from 'styled-components'

// padding example
const css = styles({
  theme: {
    padding: 16,
    paddingX: 8,
    paddingLeft: 4,
    // the magic happens here
    extendCss: css\`
      padding-left: 32px;
      margin-top: 12px;
    \`
  },
  css,
  rootSize: 16
})

// the output will be following
// extendCss is append to the end of styles so it guarantees 
// overriding previous properties
const output = css\`
  padding: 1rem; // 16px
  padding-right: 0.5rem; // 8px (paddingX is more specific than padding)
  padding-left: 0.25rem; // 4px (paddingLeft is more specific than paddingX)
  padding-left: 32px;
  margin-top: 12px;
\`
`
