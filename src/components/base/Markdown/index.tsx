import { MDXProvider } from '@mdx-js/react'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import Badge from '~/components/base/Badge'
import Editor from '~/components/base/editor'
import { Table, Row, Col } from '~/components/base/Table'

export const formatters = {
  h1: ({ children }: any) => <Heading tag="h1" level2 label={children} />,
  h2: ({ children }: any) => <Heading tag="h2" level3 label={children} />,
  h3: ({ children }: any) => <Heading tag="h3" level4 label={children} />,
  p: ({ children }: any) => <Text paragraph label={children} />,
  em: ({ children }: any) => <Text caption label={children} />,
  strong: ({ children }: any) => <Badge label={children} />,
  table: ({ children, ...props }: any) => {
    return <Table>{children}</Table>
  },
  tr: Row,
  td: ({ children }: any) => {
    return <Col>{children}</Col>
  },
  code: (props: any) => {
    return <Editor {...props} />
  },
}

const component = ({ children, formatters = formatters }) => (
  <MDXProvider components={formatters}>{children}</MDXProvider>
)

export default component
