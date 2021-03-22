import { VFC } from 'react'
import { LiveEditor } from 'react-live'
import { ExtractProps } from '~/types'
import ContentBox from '../ContentBox'

type Props = ExtractProps<typeof LiveEditor>

const component: VFC<Props> = (props) => (
  <ContentBox>
    <LiveEditor
      {...props}
      style={{
        overflow: 'auto',
        width: '100%',
        marginRight: -999,
      }}
    />
  </ContentBox>
)

export default component
