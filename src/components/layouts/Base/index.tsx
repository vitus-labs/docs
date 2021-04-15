import { FC } from 'react'
import { Root } from '~/components/base/layout'

const component: FC = ({ children }) => <Root>{children}</Root>

component.displayName = 'layouts/Base'

export default component
