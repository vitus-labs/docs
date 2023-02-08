import rocketstyle from '@vitus-labs/rocketstyle'
import { List } from '@vitus-labs/elements'
import { styles, makeItResponsive, value } from '@vitus-labs/unistyle'

type ListStyles = Parameters<typeof makeItResponsive>[0]['styles']

const listItemGaps: ListStyles = ({ theme: t, css, rootSize }) => css`
  ${t.gap &&
  css`
    gap: ${value(t.gap, rootSize)};

    & > * {
      margin: 0 !important;
    }
  `};
`

const dimensions = { indent: 'indent', gaps: 'gap', gapsY: 'gapY' } as const

export default rocketstyle({
  dimensions,
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
    (css: any) => css`
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
          styles: listItemGaps,
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
            ${listTheme};
          `};
        `
      }};
    `
  )
