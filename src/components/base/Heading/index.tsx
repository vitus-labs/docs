import { text } from '~/components/core'

type GetTag = (
  props: Partial<
    {
      level1: boolean
      level2: boolean
      level3: boolean
      level4: boolean
      level5: boolean
      level6: boolean
    } & Record<string, any>
  >
) => 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const getTag: GetTag = ({ level1, level2, level3, level4, level5, level6 }) => {
  if (level1) return 'h1'
  if (level2) return 'h2'
  if (level3) return 'h3'
  if (level4) return 'h4'
  if (level5) return 'h5'
  if (level6) return 'h6'

  return 'h1'
}

export default text
  .config({ name: 'base/Heading' })
  .attrs(({ tag, ...props }) => ({
    tag: tag || getTag(props),
  }))
  .theme((t) => ({
    fontFamily: t.fontFamily.headings,
    lineHeight: t.lineHeight.medium,
  }))
  .sizes((t) => ({
    jumbo: {
      fontSize: t.headingSize.jumbo,
      lineHeight: t.lineHeight.small,
    },
    level1: {
      fontSize: t.headingSize.level1,
    },
    level2: {
      fontSize: t.headingSize.level2,
    },
    level3: {
      fontSize: t.headingSize.level3,
    },
    level4: {
      fontSize: t.headingSize.level4,
    },
    level5: {
      fontSize: t.headingSize.level5,
      fontWeight: t.fontWeight.semibold,
      fontFamily: t.fontFamily.base,
    },
  }))
