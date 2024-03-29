import { link } from '~/components/core'
import loadAsset from './loadAsset'

export default link
  .config({ name: 'base/Icon' })
  .compose({ loadAsset })
  .attrs<{ name: string }>({
    contentAlignX: 'center',
  })
  .theme((t) => ({
    size: 24,
    color: t.color.light.base,

    hover: {
      color: t.color.primary.base,
    },
  }))
  .sizes({
    xSmall: {
      size: 12,
    },
    // large: {
    //   width: 64,
    //   height: 64,
    // },
    // xLarge: {
    //   width: 108,
    //   height: 108,
    // },
  })
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
