import { VFC } from 'react'
import { element } from '~/components/core'
import list, { Item as wrapComponent } from '~/components/base/List'
import link from '~/components/base/Link'
import text from '~/components/base/Text'
import IconLogo from '~/components/base/IconLogo'

const Wrapper = element
  .config({ name: 'base/menu/DropdownMenu/Wrapper' })
  .attrs({
    direction: 'rows',
    contentDirection: 'rows',
    contentAlignX: 'block',
    block: true,
  })
  .theme((t) => ({
    marginBottom: t.spacing.small,
  }))

const Heading = text.theme((t) => ({
  fontSize: t.fontSize.small,
  fontWeight: t.fontWeight.bold,
  marginBottom: t.spacing.small,
}))

const Link = link
  .attrs<{ icon: string }>(({ icon }) => ({
    beforeContent: icon ? (
      <IconLogo xSmall name={icon} label={icon} />
    ) : undefined,
    gap: 16,
  }))
  .theme((t) => ({
    fontSize: t.fontSize.medium,
    color: t.color.light.base,
    lineHeight: t.lineHeight.xxLarge,

    hover: {
      color: t.color.primary.base,
      textDecoration: null,
    },
  }))

const List = list.attrs({
  wrapComponent,
  component: Link,
})

type Props = {
  component: any
  title: string
  data: Array<any>
}

const component: VFC<Props> = ({ title, data, component = Link }) => (
  <Wrapper beforeContent={title ? <Heading label={title} /> : null}>
    <List data={data} component={component} />
  </Wrapper>
)

component.displayName = 'base/menu/DropdownMenu'

export default component
