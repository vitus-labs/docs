import link from '~/components/base/Link'
import SubMenu from './SubMenu'

const Link = link
  .attrs({
    block: true,
  })
  .theme((t) => ({
    height: 64,
    paddingX: t.spacing.large,
    backgroundColor: 'transparent',
    color: t.color.light.base,
    fontWeight: 600,
    fontSize: 18,

    hover: {
      backgroundColor: t.color.primary.base,
      textDecoration: 'none',
    },

    active: {
      backgroundColor: t.color.primary.base,
    },
  }))

const component = ({ data, ...props }) => (
  <>
    <Link {...props} />
    {data && <SubMenu data={data} />}
  </>
)

export default component
