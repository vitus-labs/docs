import element from '../element'
import withLink, { Props } from './withLink'

export default element
  .config({
    name: 'core/link',
  })
  .compose({
    withLink,
  })
  .attrs<Props & { onClick?: MouseEvent | (() => void) }>(
    ({ href, onClick }) => ({
      tag: href ? 'a' : onClick ? 'button' : 'span',
    })
  )
  .theme((t) => ({
    transition: t.transition.base,
    border: 'none',
    // backgroundColor: t.color.transparent,
    textDecoration: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
    userSelect: 'none',
  }))
