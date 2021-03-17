import { link } from '~/components/core'
import loadIcon from './loadIcon'

export default link
  .config({ name: 'base/Icon' })
  .compose({ loadIcon })
  .attrs<{ name: string }>({
    contentAlignX: 'center',
  })
  .theme((t) => ({
    size: 24,
    color: t.color.light.base,
  }))
  // .sizes({
  //   large: {
  //     width: 64,
  //     height: 64,
  //   },
  //   xLarge: {
  //     width: 108,
  //     height: 108,
  //   },
  // })
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
