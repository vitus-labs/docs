import link from '~/components/base/Link'

export default link.theme((t) => ({
  height: 50,
  paddingX: t.spacing.large,
  marginLeft: t.spacing.large,
  color: t.color.light.base,

  hover: {
    color: t.color.primary.base,
    textDecoration: 'none',
  },

  active: {
    color: t.color.primary.base,
  },
}))
