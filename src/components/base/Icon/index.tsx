import element from '~/components/core/element'

export default element
  .config({ name: 'Icon' })
  .attrs(({ name = 'elements' }) => ({
    tag: 'span',
    role: 'img',
    contentAlignX: 'center',
    dangerouslySetInnerHTML: {
      __html: require(`../../../assets/icons/${name}.svg?include`),
    },
    alt: 'Icon',
  }))
  .sizes((t) => ({
    large: {
      width: 64,
      height: 64,
    },
    xLarge: {
      width: 108,
      height: 108,
    },
  }))
  .variants((t) => ({
    circle: {
      backgroundColor: t.color.white.base,
      borderRadius: t.borderRadius.extra,
    },
  }))
