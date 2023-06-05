import styled, { css, ThemeProvider as provider } from 'styled-components'
import { init } from '@vitus-labs/core'

init({ styled, css, provider, component: 'div', textComponent: 'span' })
