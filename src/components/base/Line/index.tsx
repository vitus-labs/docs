import { element } from '~/components/core'

export default element
  .config({ name: 'base/Line' })
  .theme((t) => ({
    border: 'none',
    borderColor: t.color.light[100],
  }))
  .variants((t) => ({
    vertical: {
      height: t.size.fill,
      borderStyleLeft: t.borderStyle,
      borderWidthLeft: t.borderWidth,
      marginX: { xs: t.spacing.small, md: t.spacing.xLarge },
    },
    horizontal: {
      width: t.size.fill,
      borderStyleBottom: t.borderStyle,
      borderWidthBottom: t.borderWidth,
    },
  }))
