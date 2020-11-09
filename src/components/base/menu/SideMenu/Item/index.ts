import link from '~/components/base/Link'

export default link.theme((t) => ({
  height: 50,
  paddingX: 16,
  backgroundColor: 'transparent',
  color: '#fff',
  fontWeight: 600,

  hover: {
    backgroundColor: t.color.primary.base,
  },

  active: {
    fontSize: 18,
    backgroundColor: t.color.primary.base,
  },
}))
