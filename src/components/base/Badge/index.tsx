import { element } from '~/components/core'

export default element
  .config({ name: 'base/Badge' })
  .attrs({
    tag: 'span',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    paddingX: t.spacing.xSmall,
    paddingY: t.spacing.xxSmall,
    borderRadius: t.borderRadius.xs,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    fontSize: t.fontSize.smaller,
    fontWeight: t.fontWeight.semibold,
    margin: t.spacing.xxSmall,
    lineHeight: t.lineHeight.small,
  }))
