import { FC } from 'react'
import type { ExtractProps } from '~/types'
import { Overlay, element } from '~/components/core'
import IconLogo from '../IconLogo'

const base = element.config({ name: 'base/Dropdown/Content/Base' }).attrs({
  contentDirection: 'rows',
  contentAlignX: 'block',
  contentAlignY: 'top',
})

const Content = base.config({ name: 'base/Dropdown/Content' }).theme((t) => ({
  width: 200,
  height: 220,
  zIndex: 1000,
  overflow: 'hidden',
  backgroundColor: t.color.dark.base,
  borderRadius: t.borderRadius.medium,
}))

const Inner = base.config({ name: 'base/Dropdown/Inner' }).theme((t) => ({
  width: 220,
  height: 'inherit',
  overflowY: 'auto',
  paddingX: t.spacing.large,
  paddingY: t.spacing.medium,
}))

const Trigger = element
  .attrs<{ icon?: string }>(({ icon = 'elements' }) => ({
    label: 'Elements',
    gap: 8,
    beforeContent: icon && <IconLogo small name={icon} label={icon} />,
  }))
  .theme((t) => ({
    width: 180,
    fontWeight: t.fontWeight.bold,
    color: t.color.light.base,
  }))

type Props = Omit<ExtractProps<typeof Overlay>, 'children'> & {
  children: (typeof Inner)['$$types']['children']
}

const component: FC<Props> = ({ trigger = Trigger, children, ...props }) => (
  <Overlay
    type="dropdown"
    contentRefName="innerRef"
    triggerRefName="innerRef"
    trigger={trigger}
    offsetY={16}
    {...props}
  >
    <Content>
      <Inner>{children}</Inner>
    </Content>
  </Overlay>
)

component.displayName = 'base/Dropdown'

export default component
