import link from '~/components/base/Link'

export default link.theme((t) => ({
  height: 50,
  paddingX: 16,
  backgroundColor: 'transparent',
  color: '#fff',
  fontWeight: 600,

  hover: {
    backgroundColor: '#627586',
  },

  active: {
    fontSize: 18,
    backgroundColor: '#627586',
  },
}))
