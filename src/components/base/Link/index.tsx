import { link } from '~/components/core'

export default link
  .config({ name: 'base/Link' })
  .theme((t) => ({
    color: t.color.primary.base,
    transition: t.transition.base,

    hover: {
      textDecoration: 'underline',
    },
  }))
  .variants({
    transparent: {
      hover: {
        textDecoration: 'none',
      },
    },
  })
  .multiple({ active: true })
