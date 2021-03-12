import { element } from '~/components/core'

export default element
  .variants({
    gapMd: {
      paddingY: 40,
    },
    gapLg: {
      paddingY: 80,
    },
  })
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
