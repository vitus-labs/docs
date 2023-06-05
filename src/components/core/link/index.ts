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
  .attrs<Props>(({ href, onClick }) => ({
    tag: getTag({ href, onClick }),
  }))
  .theme((t) => ({
    transition: t.transition.base,
    border: 'none',
    textDecoration: 'none',
    outline: 'none',
    padding: t.spacing.reset,
    margin: t.spacing.reset,
    userSelect: 'none',
  }))
