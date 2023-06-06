import { useDocsContext } from '~/contexts/docsContext'
import SideMenuLinks from '~/components/layout/SideMenuLinks'

export default SideMenuLinks.attrs(() => {
  const ctx = useDocsContext()

  return {
    data: ctx.menu,
  }
})
