import { element } from '~/components/core'

export default element

  .attrs({
    tag: 'section',
    contentDirection: 'rows',
    block: true,
  })
  .styles(
    (css) => css`
      width: 100%;
    `
  )
