import { element } from '~/components/core'

export default element
  .config({ name: 'Bg' })
  .attrs({
    tag: 'section',
    contentDirection: 'rows',
    contentAlignX: 'block',
  })
  .states((t, css) => ({
    primary: {
      extendCss: [
        css`
          background: linear-gradient(180deg, #112f4a 0%, #071a2c 100%);
        `,
      ],
    },
    secondary: {
      extendCss: [
        css`
          background: linear-gradient(180deg, #762a2a 0%, #661818 100%);
        `,
      ],
    },
  }))
