import { element } from '~/components/core'

export default element
  .config({ name: 'base/Background' })
  .attrs({
    tag: 'section',
    contentDirection: 'rows',
    contentAlignX: 'block',
  })
  .states({
    primary: {
      backgroundColor: '#61892F',
    },
    secondary: {
      backgroundColor: '#474B4F',
    },
  })
