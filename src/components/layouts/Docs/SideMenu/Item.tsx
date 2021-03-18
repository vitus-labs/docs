import React, { forwardRef } from 'react'
import { useRouter } from 'next/router'
import MenuItem from '~/components/base/menu/SideMenu/Item'
import SideSubMenu from '~/components/base/menu/SideSubMenu'

const NewItem = forwardRef(({ data, ...props }, ref) => {
  const { asPath, query, ...rest } = useRouter()
  const { href } = props

  const slugs = ['docs', ...query.slug].join('/')
  const currentLink = `/${slugs}`

  const isActive = currentLink === href

  return (
    <>
      <MenuItem {...props} active={isActive} ref={ref} />
      {isActive && data && <SideSubMenu data={data} />}
    </>
  )
})

export default MenuItem.config({ component: NewItem })
