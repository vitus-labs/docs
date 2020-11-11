import { element } from '~/components/core'

export default element
  .config({ name: 'Box' })
  .attrs({
    tag: 'span',
    contentDirection: 'rows',
    contentAlignX: 'center',
    gap: 16,
  })
  .theme((t, css) => ({
    backgroundColor: 'rgba(84, 214, 255, 0.4)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#54D6FF',

    active: {
      backgroundColor: '#54D6FF',
    },
  }))
  .sizes({
    wrapper: {
      minHeight: 320,
      padding: 16,
    },
    thin: {
      minHeight: 48,
      paddingX: 16,
      paddingY: 8,
    },
    inner: {
      minWidth: 48,
      minHeight: 48,
      height: '100%',
      width: '100%',
    },
    thinInner: {
      minWidth: 48,
      minHeight: 12,
      maxHeight: '25%',
      width: '100%',
    },
  })
  .multiple({ active: true })
