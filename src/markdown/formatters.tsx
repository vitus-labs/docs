import Editor from '~/components/base/Editor'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import TextList, { Item } from '~/components/base/TextList'
import Link from '~/components/base/Link'
import { Table, Head, HeadCol, Row, Col } from '~/components/base/Table'

// --------------------------------------------------------
// TYPOGRAPHY
// --------------------------------------------------------
export const h1 = Heading.attrs({
  tag: 'h1',
  level2: true,
}).theme((t) => ({
  marginBottom: t.spacing.xxxLarge,
}))

export const h2 = Heading.attrs<{ name?: string; children?: string }>(
  ({ children }) => ({
    tag: 'h2',
    level3: true,
    // add id as an anchor link
    id: children ? children.replace(/ /g, '-').toLowerCase() : undefined,
  })
).theme((t) => ({
  marginY: t.spacing.xLarge,
}))

export const h3 = Heading.attrs({
  tag: 'h3',
  level4: true,
}).theme((t) => ({
  marginY: t.spacing.medium,
}))

export const h4 = Heading.attrs({
  tag: 'h4',
  level5: true,
}).theme((t) => ({
  marginTop: t.spacing.small,
  marginBottom: t.spacing.medium,
}))

export const p = Text.attrs({
  paragraph: true,
}).theme((t) => ({
  maxWidth: 800,
  marginTop: t.spacing.xLarge,
}))

export const em = Text.attrs({
  caption: true,
})

export const strong = Text.theme({ fontWeight: 'bold' })

export const inlineCode = Text.attrs({ code: true, tag: 'code' })

export const a = Link

export const ul = TextList.theme((t) => ({
  marginLeft: t.spacing.large,
}))

export const ol = ul.attrs({ tag: 'ol' })

const li = Item.theme((t) => ({
  marginBottom: t.spacing.small,
  // color: t.color.light.base,
}))

export const table = Table.theme((t) => ({
  marginBottom: t.spacing.xLarge,
}))

export default {
  h1,
  h2,
  h3,
  h4,
  p,
  inlineCode,
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
