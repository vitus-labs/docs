import React, { FC, useCallback } from 'react'
import { LivePreview } from 'react-live'
import ContentBox from '../ContentBox'

const Component = ({ view = 'rows', ...props }) => {
  const renderer: FC = useCallback(
    (props: any) => <ContentBox {...props} contentDirection={view} />,
    [view]
  )

  // Seems to be missing correct Component type, but mentioned in documentation
  // https://github.com/FormidableLabs/react-live#livepreview-
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <LivePreview Component={renderer} {...props} />
}

export default Component
