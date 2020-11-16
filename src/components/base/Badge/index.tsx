import { element } from '~/components/core'

export default element
  .config({ name: 'Badge' })
  .attrs({
    tag: 'span',
    contentAlignX: 'center',
  })
  .theme((t, css) => ({
    paddingX: 4,
    paddingY: 2,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    fontSize: '80%',
    fontWeight: t.fontWeight.semibold,
    margin: 2,
  }))
