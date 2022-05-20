import { FC, ReactNode } from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import { Provider as provider } from '@vitus-labs/unistyle'
import theme from './theme'
import GlobalStyle from './GlobalStyles'

type Props = {
  children: ReactNode
}

const component: FC<Props> = ({ children }) => (
  <Provider theme={theme} provider={provider}>
    {/* @ts-ignore */}
    <GlobalStyle theme={theme} />
    {children}
  </Provider>
)

export default component
