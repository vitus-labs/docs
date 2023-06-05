import { Heading, Text, Link, Editor } from '~/components/base'
import TextList, { Item as TextListItem } from '~/components/base/TextList'
import { Table, Head, HeadCol, Row, Col } from '~/components/base/Table'

// --------------------------------------------------------
// TYPOGRAPHY
// --------------------------------------------------------
const h1 = Heading.attrs({
  level1: true,
}).theme((t) => ({
  marginBottom: t.spacing.xxxLarge,
}))

const h2 = Heading.attrs<{ name?: string; children?: string }>(
  ({ children }) => ({
    tag: 'h2',
    level3: true,
    // add id as an anchor link
    id: children ? children.replace(/ /g, '-').toLowerCase() : undefined,
  })
).theme((t) => ({
  marginY: t.spacing.xLarge,
}))

const h3 = Heading.attrs({
  tag: 'h3',
  level4: true,
}).theme((t) => ({
  marginY: t.spacing.medium,
}))

const h4 = Heading.attrs({
  tag: 'h4',
  level5: true,
}).theme((t) => ({
  marginTop: t.spacing.small,
  marginBottom: t.spacing.medium,
}))

const p = Text.attrs({
  paragraph: true,
}).theme((t) => ({
  maxWidth: 800,
  marginTop: t.spacing.xLarge,
}))

const em = Text.attrs({
  caption: true,
})

const strong = Text.theme((t) => ({ fontWeight: t.fontWeight.bold }))

const InlineCode = Text.attrs({ code: true, tag: 'code' })

const ul = TextList.theme((t) => ({
  marginLeft: t.spacing.large,
}))

const ol = ul.attrs({ tag: 'ol' })

const li = TextListItem.theme((t) => ({
  marginBottom: t.spacing.small,
}))

const table = Table.theme((t) => ({
  marginBottom: t.spacing.xLarge,
}))

export default {
  h1,
  h2,
  h3,
  h4,
  p,
  inlineCode: InlineCode,
  em,
  strong,
  a: Link,
  ul,
  ol,
  li,
  table,
  tr: Row,
  td: Col,
  thead: Head,
  th: HeadCol,
  // code: (props: any) =>
  //   props.className ? <Editor {...props} /> : <InlineCode {...props} />,
  code: Editor,
}
