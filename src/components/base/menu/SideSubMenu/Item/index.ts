import link from '~/components/base/Link'

export default link.theme((t) => ({
  height: 50,
  paddingX: 16,
  marginLeft: 16,
  color: '#fff',

  hover: {
    color: t.color.primary.base,
  },
  active: {
    color: t.color.primary.base,
  },
}))
