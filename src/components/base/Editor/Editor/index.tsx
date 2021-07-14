import { VFC } from 'react'
import { LiveEditor } from 'react-live'
import { ExtractProps } from '~/types'
import ContentBox from '../ContentBox'

type Props = ExtractProps<typeof LiveEditor>

const component: VFC<Props> = (props) => (
  <ContentBox>
    {/* @ts-ignore */}
    <LiveEditor
      {...props}
      style={{
        overflow: 'visible',
        width: '100%',
        background: 'transparent',
        outline: 'none',
      }}
    />
  </ContentBox>
)

export default component
