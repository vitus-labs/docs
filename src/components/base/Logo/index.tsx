import { element } from '~/components/core'

export default element.attrs({
  contentAlignX: 'left',
  contentAlignY: 'center',
  dangerouslySetInnerHTML: {
    __html: require(`~/assets/logo/vitus-labs.svg?include`),
  },
})
