import { MDXProvider } from '@mdx-js/react'
import defaultFormatters from './formatters'

const component = ({ children, formatters = defaultFormatters }) => (
  <MDXProvider components={formatters}>{children}</MDXProvider>
)

export default component
