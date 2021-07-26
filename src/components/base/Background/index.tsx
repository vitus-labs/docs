import { element } from '~/components/core'

export default element
  .config({ name: 'base/Background' })
  .attrs<{ id?: string }>({
    contentDirection: 'rows',
    contentAlignX: 'block',
  })
  .states((t) => ({
    primary: {
      backgroundColor: t.color.primary[900],
    },
    secondary: {
      backgroundColor: t.color.light[100],
    },
  }))
