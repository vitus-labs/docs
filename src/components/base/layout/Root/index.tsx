import { element } from '~/components/core'

export default element
  .attrs({
    block: true,
    vertical: true,
    contentDirection: 'rows',
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme({
    height: '100vh',
  })
  .styles(
    (css) => css`
      background: linear-gradient(180deg, #3d4b58 0%, #35414d 100%);
    `
  )
