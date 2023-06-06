import link from '~/components/base/Link'

export default link.theme((t) => ({
  paddingX: t.spacing.small,
  fontWeight: t.fontWeight.bold,
  color: t.color.light.base,

  hover: {
    color: t.color.primary.base,
    textDecoration: 'none',
  },

  active: {
    color: t.color.primary.base,
  },
}))
