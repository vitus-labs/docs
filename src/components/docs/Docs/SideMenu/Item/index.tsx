import React, { useContext, forwardRef } from 'react'
import { useRouter } from 'next/router'
import { Context } from '~/components/docs/context/DocsLinks'
import MenuItem from '~/components/base/menu/SideMenu/Item'
import SideSubMenu from '~/components/base/menu/SideSubMenu'

const NewItem = forwardRef(({ href, ...props }, ref) => {
  const { route } = useRouter()
  const { links } = useContext(Context)

  const hasSubmenu = route === href

  const renderSubmenu = () => {
    if (!hasSubmenu || !links) return null

    const data = links.map((item) => ({ label: item.title, href: item.link }))

    return <SideSubMenu data={data} />
  }

  return (
    <>
      <MenuItem ref={ref} href={href} {...props} />
      {renderSubmenu()}
    </>
  )
})

export default MenuItem.config({ component: NewItem })
