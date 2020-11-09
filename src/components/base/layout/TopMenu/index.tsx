import { element } from '~/components/core'

export default element
  .theme((t) => ({
    height: t.layout.topMenu.height,
    paddingX: t.spacing.xxxl,
    backgroundColor: t.layout.topMenu.bg,
    borderBottom: '1px solid #4F6579',
  }))
  .variants((t) => ({
    transparent: {
      backgroundColor: 'transparent',
      borderBottom: 'none',
    },
  }))
