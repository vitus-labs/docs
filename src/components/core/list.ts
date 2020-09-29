import rocketstyle from '@vitus-labs/rocketstyle'
import { styles } from '@vitus-labs/unistyle'
import { List } from '@vitus-labs/elements'

const createGap = (size) => ({
  gapSize: size,
})

export default rocketstyle({
  useBooleans: true,
  dimensions: {
    states: 'state',
    sizes: 'size',
    variants: 'variant',
    multiple: ['multiple', { multi: true }],
  },
})({
  name: 'core/List',
  component: List,
})
  .attrs({
    block: true,
    contentAlignX: 'block',
    contentDirection: 'rows',
  })
  .multiple((t) => ({
    gapXXs: createGap(t.spacing.xxs),
    gapXs: createGap(t.spacing.xs),
    gapSm: createGap(t.spacing.sm),
    gapBase: createGap(t.spacing.base),
    gapLg: createGap(t.spacing.lg),
    gapXl: createGap(t.spacing.xl),
    gapXxl: createGap(t.spacing.xxl),
    gapXxxl: createGap(t.spacing.xxxl),
  }))
  .styles(
    (css) => css`
      flex-wrap: nowrap;

      ${({ $rocketstyle, theme }) =>
        styles({ theme: $rocketstyle, css, rootSize: theme.rootSize })};

      /* TODO: make this styles more convenient and readable */
      /* add spacing between children when used in list */
      ${({ beforeContent, afterContent, contentDirection, $rocketstyle }) => {
        const { gapSize } = $rocketstyle
        if (!Number.isInteger(gapSize)) return null

        // if list has before or afterContent propery then we need to style
        // children inside content element picked by data attribute
        if (beforeContent || afterContent) {
          // spacing for children in vertical list
          // or spacing for children in horizontal list
          // contentDirection === 'rows' => vertical list
          return contentDirection === 'rows'
            ? css`
                & > [data-element='content'] > * + * {
                  margin-top: ${gapSize}px;
                }
              `
            : css`
                & > [data-element='content'] > * + * {
                  margin-left: ${gapSize}px;
                }
              `
        }

        // spacing for children in vertical list
        // or spacing for children in horizontal list
        // (without before or afterContent in list)
        // contentDirection === 'rows' => vertical list
        return contentDirection === 'rows'
          ? css`
              & > * + * {
                margin-top: ${gapSize}px;
              }
            `
          : css`
              & > * + * {
                margin-left: ${gapSize}px;
              }
            `
      }}

      ${({ contentDirection }) =>
        contentDirection === 'rows' &&
        css`
          & > & {
            width: 100%;
          }
        `};
    `
  )
