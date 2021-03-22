import React from 'react'
import { LivePreview } from 'react-live'
import ContentBox from '../ContentBox'

const component = ({ view = 'rows', ...props }) => {
  const Component = (props: any) => (
    <ContentBox {...props} contentDirection={view} />
  )

  // @ts-ignore
  return <LivePreview Component={Component} {...props} />
}

export default component
