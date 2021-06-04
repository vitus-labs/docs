import { FC } from 'react'
// @ts-ignore
import { MDXProvider } from '@mdx-js/react'
import defaultFormatters from './formatters'

type Props = {
  formatters?: typeof defaultFormatters
}

const component: FC<Props> = ({ children, formatters = defaultFormatters }) => (
  <MDXProvider components={formatters}>{children}</MDXProvider>
)

export default component
