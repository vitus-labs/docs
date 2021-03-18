import Editor from '~/components/base/editor'
import Badge from '~/components/base/Badge'
import List from '~/components/base/List'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import Link from '~/components/base/Link'
import { Table, Head, HeadCol, Row, Col } from '~/components/base/Table'

// --------------------------------------------------------
// TYPOGRAPHY
// --------------------------------------------------------
export const h1 = Heading.attrs({
  tag: 'h1',
  level2: true,
}).theme((t) => ({
  marginBottom: t.spacing.xxLarge,
}))

export const h2 = Heading.attrs<{ name?: string; children?: string }>(
  ({ children }) => ({
    tag: 'h2',
    level3: true,
    id: children ? `#${children.replace(/ /g, '-').toLowerCase()}` : undefined,
  })
).theme((t) => ({
  marginTop: t.spacing.medium,
  marginBottom: t.spacing.xLarge,
}))

export const h3 = Heading.attrs({
  tag: 'h3',
  level4: true,
}).theme((t) => ({
  marginTop: t.spacing.small,
  marginBottom: t.spacing.medium,
}))

export const p = Text.attrs({
  paragraph: true,
}).theme({
  maxWidth: 800,
})

export const em = Text.attrs({
  caption: true,
})

export const strong = Badge

export const a = Link

export const ul = List.attrs({
  rootElement: true,
  tag: 'ul',
})

export const ol = List.attrs({ rootElement: true, tag: 'ol' })

export const li = Text.attrs({ tag: 'li' })

export const table = Table.theme((t) => ({
  marginBottom: t.spacing.xLarge,
}))

export default {
  h1,
  h2,
  h3,
  p,
  em,
  strong,
  a,
  ul,
  ol,
  li,
  table,
  tr: Row,
  td: Col,
  thead: Head,
  th: HeadCol,
  code: Editor,
}
