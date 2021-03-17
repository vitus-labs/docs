import React, { forwardRef } from 'react'
import { useRouter } from 'next/router'
import MenuItem from '~/components/base/menu/SideMenu/Item'
import SideSubMenu from '~/components/base/menu/SideSubMenu'

const NewItem = forwardRef(({ data, ...props }, ref) => {
  const { asPath } = useRouter()
  const { href } = props

  const isActive = asPath === href

  return (
    <>
      <MenuItem {...props} active={isActive} ref={ref} />
      {isActive && <SideSubMenu data={data} />}
    </>
  )
})

export default MenuItem.config({ component: NewItem })
