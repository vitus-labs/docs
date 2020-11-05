import { element } from '~/components/core'

export default element
  .attrs({
    tag: 'article',
    contentDirection: 'rows',
    contentAlignX: 'center',
  })
  .theme((t, css) => ({
    padding: 16,
    borderRadius: 16,
    extendCss: [
      css`
        background: rgba(255, 255, 255, 0.08);
      `,
    ],
  }))
