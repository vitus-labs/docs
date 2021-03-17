import element from '~/components/core/element'
import loadIcon from './loadIcon'

export default element
  .config({ name: 'base/IconLogo' })
  .compose({ loadIcon })
  .attrs<{ name: string; role?: string }>({
    tag: 'span',
    role: 'img',
    contentAlignX: 'center',
  })
  .sizes({
    large: {
      width: 64,
      height: 64,
    },
    xLarge: {
      width: 108,
      height: 108,
    },
  })
  .variants((t) => ({
    circle: {
      backgroundColor: t.color.white.base,
      borderRadius: t.borderRadius.extra,
    },
  }))
