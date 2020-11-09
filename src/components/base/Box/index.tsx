import { element } from '~/components/core'

export default element
  .config({ name: 'Box' })
  .attrs({
    tag: 'article',
    contentDirection: 'rows',
    contentAlignX: 'center',
  })
  .theme((t, css) => ({
    width: '100%',
    paddingX: 24,
    paddingY: 36,
    borderRadius: 16,
    extendCss: [
      css`
        background: rgba(255, 255, 255, 0.08);
      `,
    ],
  }))
