import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Menu from '~/components/base/menu/SideMenu'
import { Context } from '~/components/docs/context/DocsLinks'

const data = [
  {
    label: 'Basics',
    href: (r) => r.uiSystem.elements.base,
  },
  {
    label: 'Element',
    href: (r) => r.uiSystem.elements.element,
  },
  {
    label: 'List',
    href: (r) => r.uiSystem.elements.list,
  },
  {
    label: 'Text',
    href: (r) => r.uiSystem.elements.text,
  },
  {
    label: 'Overlay',
    href: (r) => r.uiSystem.elements.overlay,
  },
]

const component = () => {
  const { route } = useRouter()
  const { links } = useContext(Context)

  const createMenu = () => {
    return data.map((item) => {
      console.log(item.href)
      console.log(route)
      if (item.href === route) {
        return { ...item, data: links }
      }

      return item
    })
  }

  return <Menu data={createMenu()} />
}

export default component
