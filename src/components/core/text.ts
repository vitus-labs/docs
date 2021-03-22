import { Text } from '@vitus-labs/elements'
import element from './element'

export default element
  .config({
    name: 'core/Text',
    component: Text,
  })
  .theme((t) => ({
    marginX: 0,
    marginY: 0,
    lineHeight: 2,
    color: t.color.light.base,
  }))
  .multiple({
    centered: {
      textAlign: 'center',
    },
  })
