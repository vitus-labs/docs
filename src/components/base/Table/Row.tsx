import { element } from '~/components/core'

export default element
  .config({ name: 'base/Table/Row', component: 'tr' })
  .styles(
    (css) => css`
      background-color: rgba(255, 255, 255, 0.1);

      &:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.2);
      }
    `
  )
