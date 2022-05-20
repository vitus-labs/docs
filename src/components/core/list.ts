import rocketstyle from '@vitus-labs/rocketstyle'
import { List } from '@vitus-labs/elements'
import { styles, makeItResponsive, value } from '@vitus-labs/unistyle'
import type { Theme } from '~/theme'

type ComponentTheme = Parameters<typeof styles>[0]['theme']
type ComponentThemeDefinition = ComponentTheme

type ListStyles = Parameters<typeof makeItResponsive>[0]['styles']

const listStyles: ListStyles = ({ theme: t, css, rootSize }) => css`
  ${t.gap &&
  css`
    margin: ${value([t.gap / 2], rootSize)} !important;
  `};

  ${t.indent &&
  css`
    padding: ${value([t.indent / 2], rootSize)} !important;
  `};
`

//<Theme, ComponentThemeDefinition & Partial<{ gap: number; indent: number }>>
export default rocketstyle({
  dimensions: { indent: 'indent', gaps: 'gap', gapsY: 'gapY' } as const,
  useBooleans: false,
})({
  component: List,
  name: 'core/List',
})
  .attrs({
    rootElement: true,
    block: true,
    direction: 'rows',
    contentAlignY: 'top',
    contentAlignX: 'block',
    contentDirection: 'rows',
  })
  .theme((t) => ({
    boxSizing: 'border-box',
    margin: t.spacing.reset,
    padding: t.spacing.reset,
    listStyleType: 'none',
  }))
  .gaps((t) => ({
    xxs: {
      gap: t.spacing.xxSmall,
    },
    xs: {
      gap: t.spacing.xSmall,
    },
    sm: {
      gap: t.spacing.small,
    },
    medium: {
      gap: t.spacing.medium,
    },
    lg: {
      gap: t.spacing.large,
    },
    xl: {
      gap: t.spacing.xLarge,
    },
    xxl: {
      gap: t.spacing.xxLarge,
    },
    xxxl: {
      gap: t.spacing.xxxLarge,
    },
  }))
  .indent((t) => ({
    small: {
      indent: t.spacing.xSmall / 2,
    },
    medium: {
      indent: t.spacing.medium / 2,
    },
    large: {
      indent: t.spacing.large / 2,
    },
    xLarge: {
      indent: t.spacing.xLarge / 2,
    },
    xxLarge: {
      indent: t.spacing.xxLarge / 2,
    },
  }))
  .gapsY((t) => ({
    xSmall: {
      margin: t.spacing.xSmall,
    },
    small: {
      margin: t.spacing.small,
    },
    medium: {
      margin: t.spacing.medium,
    },
    large: {
      margin: t.spacing.large,
    },
    xLarge: {
      margin: t.spacing.xLarge,
    },
    xxLarge: {
      margin: t.spacing.xxLarge,
    },
  }))
  .styles(
    (css) => css`
      ${({ $rocketstyle, rootElement }: any) => {
        const { gap, indent, ...restStyles } = $rocketstyle

        const baseTheme = makeItResponsive({
          theme:
            {
              ...restStyles,
            } || {},
          styles,
          css,
        })

        const listTheme = makeItResponsive({
          theme: { gap, indent },
          styles: listStyles,
          css,
        })

        return css`
          /* -------------------------------------------------------- */
          /* BASE STATE */
          /* -------------------------------------------------------- */
          flex-wrap: wrap;
          ${baseTheme};

          ${rootElement &&
          css`
            & > * {
              ${listTheme};
            }
          `};
        `
      }};
    `
  )
