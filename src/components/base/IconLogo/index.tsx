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
    xSmall: {
      size: 16,
    },
    small: {
      size: 24,
    },
    large: {
      size: 64,
    },
    xLarge: {
      size: 108,
    },
  })
  .variants((t) => ({
    circle: {
      backgroundColor: t.color.white.base,
      borderRadius: t.borderRadius.extra,
    },
  }))
  .styles(
    (css) => css`
      & > svg {
        width: 100%;
        height: auto;

        & * {
          fill: currentColor;
        }
      }
    `
  )
