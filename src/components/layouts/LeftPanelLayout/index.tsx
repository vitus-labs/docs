import { VFC } from 'react'
import { ExtractProps } from '~/types'
import { Element } from '~/components/core'
import SideMenu from '~/components/base/layout/SideMenu'
import Content from '~/components/base/layout/Content'

type Props = {
  sidePanel: ExtractProps<typeof SideMenu>['children']
  children: ExtractProps<typeof Content>['children']
}

const component: VFC<Props> = ({ sidePanel, children }) => (
  <Element
    contentDirection="inline"
    beforeContentAlignY="top"
    beforeContent={<SideMenu content={sidePanel} />}
  >
    <Content light>{children}</Content>
  </Element>
)

export default component
