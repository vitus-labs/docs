import rocketstyle from '@vitus-labs/rocketstyle'
import { styles, makeItResponsive } from '@vitus-labs/unistyle'
import { Element } from '@vitus-labs/elements'

export default rocketstyle({
  useBooleans: true,
  dimensions: {
    states: 'state',
    sizes: 'size',
    variants: 'variant',
    multiple: ['multiple', { multi: true }],
  },
})({
  name: 'core/Element',
  component: Element,
})
  .theme((t) => ({
    boxSizing: 'border-box',
    fontFamily: t.fontFamily.base,
    fontSize: t.fontSize.base,
    lineHeight: t.lineHeight.reset,
    color: t.color.black.base,
    textDecoration: 'none',
    outline: 'none',
  }))
  .styles(
    (css) => css`
      ${({
        href,
        onClick,
        $rocketstyle,
        $rocketstate: { disabled, active, hover, focus },
      }) => {
        const isDynamic = onClick || href

        const {
          base: baseStyles = {},
          hover: hoverStyles = {},
          focus: focusStyles = {},
          active: activeStyles = {},
          ...restStyles
        } = $rocketstyle

        const baseTheme = makeItResponsive({
          theme:
            {
              ...restStyles,
              ...baseStyles.base,
            } || {},
          styles,
          css,
        })

        const hoverTheme = makeItResponsive({
          theme: hoverStyles || {},
          styles,
          css,
        })

        const focusTheme = makeItResponsive({
          theme: focusStyles || {},
          styles,
          css,
        })

        const activeTheme = makeItResponsive({
          theme: activeStyles || {},
          styles,
          css,
        })

        return css`
          /* -------------------------------------------------------- */
          /* BASE STATE */
          /* -------------------------------------------------------- */
          ${baseTheme};

          ${!disabled &&
          isDynamic &&
          css`
            cursor: pointer;
          `}

          /* -------------------------------------------------------- */
        /* HOVER STATE */
        /* -------------------------------------------------------- */
        ${!disabled &&
          !active &&
          css`
            &:hover {
              ${hoverTheme};
            }
          `};

          ${hover &&
          css`
            ${hoverTheme};
          `};

          /* -------------------------------------------------------- */
          /* FOCUS STATE */
          /* -------------------------------------------------------- */
          ${!disabled &&
          css`
            &:focus {
              ${focusTheme};
            }
          `};

          ${focus &&
          css`
            ${focusTheme};
          `};

          /* -------------------------------------------------------- */
          /* ACTIVE / PRESSED STATE */
          /* -------------------------------------------------------- */
          ${!disabled &&
          isDynamic &&
          css`
            &:active {
              ${activeTheme};
            }
          `};

          ${!disabled &&
          active &&
          css`
            ${activeTheme};
          `};
        `
      }};
    `
  )
