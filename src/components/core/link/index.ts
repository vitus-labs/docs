import element from '../element'
import withLink, { Props } from './withLink'

const getTag = ({ href, onClick }: any) => {
  if (href) return 'a'
  if (onClick) return 'button'
  return 'span'
}

export default element
  .config({
    name: 'core/link',
  })
  .compose({
    withLink,
  })
  .attrs<Props & { onClick?: MouseEvent | (() => void) }>(
    ({ href, onClick }) => ({
      tag: getTag({ href, onClick }),
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
