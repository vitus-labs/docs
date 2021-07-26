import { element } from '~/components/core'

export default element
  .variants((t) => ({
    gapMd: {
      paddingY: t.spacing.xLarge * t.ratio.xLarge,
    },
    gapLg: {
      paddingY: t.spacing.xLarge * t.ratio.xxxLarge,
    },
  }))
  .multiple({
    centered: true,
  })
  .attrs<{ name?: string }>(({ centered, multiple = [] }) => {
    const isContentCentered = centered || multiple.includes('centered')

    return {
      tag: 'section',
      contentDirection: 'rows',
      contentAlignX: isContentCentered ? 'center' : 'block',
      block: true,
    }
  })
