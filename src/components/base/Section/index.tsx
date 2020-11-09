import { element } from '~/components/core'

export default element
  .attrs(({ centered, multiple = [] }) => {
    const isContentCentered = centered || multiple.includes('centered')

    return {
      tag: 'section',
      contentDirection: 'rows',
      contentAlignX: isContentCentered ? 'center' : 'block',
      block: true,
    }
  })
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
