import link from '~/components/base/Link'

export default link.theme((t) => ({
  paddingX: 8,
  fontWeight: 700,
  color: '#fff',

  hover: {
    color: t.color.primary.base,
  },

  active: {
    color: t.color.primary.base,
  },
}))
