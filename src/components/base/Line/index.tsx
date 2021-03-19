import { element } from '~/components/core'

export default element
  .config({ name: 'base/Line' })
  .theme((t) => ({
    border: 'none',
    borderColor: '#4F6579',
  }))
  .variants((t) => ({
    vertical: {
      height: '100%',
      borderStyleLeft: 'solid',
      borderWidthLeft: 1,
      marginX: t.spacing.xLarge,
    },
    horizontal: {
      width: '100%',
      borderStyleBottom: 'solid',
      borderWidthBottom: 1,
    },
  }))
