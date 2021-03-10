import { FC } from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import { Provider as provider } from '@vitus-labs/unistyle'
import theme from './theme'
import GlobalStyle from './GlobalStyles'

const component: FC = ({ children }) => (
  <Provider theme={theme} provider={provider}>
    <GlobalStyle theme={theme} />
    {children}
  </Provider>
)

export default component
