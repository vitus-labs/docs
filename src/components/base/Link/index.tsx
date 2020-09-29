import { element } from '~/components/core'

export default element
  .attrs(({ href, onClick }) => {
    const isLink = !!href
    const isButton = !!onClick
    const tag = isLink ? 'a' : isButton ? 'button' : 'span'

    return {
      tag,
    }
  })
  .theme((t) => ({
    color: '#628EFF',
    transition: t.transition.base,

    hover: {
      textDecoration: 'underline',
    },
  }))
  .multiple({ active: true })
