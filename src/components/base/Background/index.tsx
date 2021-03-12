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
      background: 'linear-gradient(180deg, #112f4a 0%, #071a2c 100%)',
    },
    secondary: {
      background: 'linear-gradient(180deg, #762a2a 0%, #661818 100%)',
    },
  })
