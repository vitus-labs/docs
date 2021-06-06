import { VFC } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import defaultFormatters from './formatters'

type Props = {
  formatters?: typeof defaultFormatters
}

const component: VFC<Props> = ({
  formatters = defaultFormatters,
  ...props
}) => <MDXRemote {...(props as any)} components={formatters} />

export default component
