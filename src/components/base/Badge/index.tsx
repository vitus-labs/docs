import { element } from '~/components/core'

export default element
  .config({ name: 'base/Badge' })
  .attrs({
    tag: 'span',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    margin: t.spacing.xxSmall,
    paddingX: t.spacing.xSmall,
    paddingY: t.spacing.xxSmall,
    borderRadius: t.borderRadius.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    fontSize: t.fontSize.smaller,
    fontWeight: t.fontWeight.semibold,
    lineHeight: t.lineHeight.small,
  }))
