import { forwardRef } from 'react'
import { useRouter } from 'next/router'
import link from '~/components/base/Link'
import SubMenu from './SubMenu'

const Link = link
  .attrs({
    block: true,
  })
  .theme((t) => ({
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

const component = forwardRef(({ data, ...props }, ref) => {
  const { query } = useRouter()
  const { href } = props

  const isActive = href.endsWith(query.slug.join('/'))

  return (
    <>
      <Link {...props} ref={ref} active={isActive} />
      <SubMenu data={data} />
    </>
  )
})

export default component
