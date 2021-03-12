import { VFC } from 'react'
import ReactMarkdown from 'react-markdown'
import Badge from '~/components/base/Badge'
import Text from '~/components/base/Text'
import Link from '~/components/base/Link'

const renderers = {
  paragraph: ({ children }: any) => <Text paragraph label={children} />,
  code: ({ children }: any) => <Text paragraph label={children} />,
  emphasis: ({ children }: any) => <Text caption label={children} />,
  strong: ({ children }: any) => <Badge label={children} />,
  link: ({ children, href }: any) => <Link href={href} label={children} />,
}

const component: VFC<{ children: string }> = ({ children }) => (
  <ReactMarkdown renderers={renderers} children={`${children}`} />
)

export default component
