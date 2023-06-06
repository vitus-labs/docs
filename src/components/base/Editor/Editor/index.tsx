import { FC } from 'react'
import { LiveEditor } from 'react-live'
import { ExtractProps } from '~/types'
import ContentBox from '../ContentBox'

type Props = ExtractProps<typeof LiveEditor> & { resetIndent?: boolean }

const Component: FC<Props> = ({ resetIndent, ...props }) => (
  <ContentBox resetIndent={resetIndent}>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
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

export default Component
