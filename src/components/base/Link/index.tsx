import { element } from '~/components/core'

export default element
  .config({ name: 'Link' })
  .attrs(({ href, onClick }) => {
    const isLink = !!href
    const isButton = !!onClick
    const tag = isLink ? 'a' : isButton ? 'button' : 'span'

    return {
      tag,
    }
  })
  .theme((t) => ({
    color: t.color.primary.base,
    transition: t.transition.base,

    hover: {
      textDecoration: 'underline',
    },
  }))
  .variants((t) => ({
    transparent: {
      hover: {
        textDecoration: 'none',
      },
    },
  }))
  .multiple({ active: true })
