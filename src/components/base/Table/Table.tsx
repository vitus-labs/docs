import { element } from '~/components/core'

export default element
  .config({ name: 'base/Table/Table', component: 'table' })
  .styles(
    (css) =>
      css`
        border-spacing: 0;
      `
  )
