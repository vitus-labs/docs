import { element } from '~/components/core'

export default element
  .config({ name: 'Box' })
  .attrs({
    tag: 'article',
    contentDirection: 'rows',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    width: '100%',
    paddingX: 24,
    paddingY: 36,
    borderRadius: 16,
    transition: t.transition.base,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',

    hover: {
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
    },
  }))
