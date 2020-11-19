import React, { FC } from 'react'
import { withLive } from 'react-live'
import { Container, Row, Col } from '~/components/base/grid'
import { Provider, Editor, Error, Preview } from '~/components/base/editor'

type Props = {
  // live: object
  code: string
} & Partial<{
  scope: object
  noInline: boolean
  disabled: boolean
  editor: boolean
  preview: boolean
}>

const component: FC<Props> = ({
  live = {},
  code,
  scope,
  noInline = true,
  disabled,
  editor = true,
  preview = true,
}) => {
  const { error } = live

  return (
    <Provider code={code} scope={scope} noInline={noInline}>
      <Container gap={48} gutter={0}>
        <Row>
          {editor && (
            <Col>
              <Editor disabled={disabled} />
            </Col>
          )}

          {preview && (
            <Col>
              <Preview />
            </Col>
          )}
        </Row>

        {!!error && (
          <Row>
            <Col>
              <Error />
            </Col>
          </Row>
        )}
      </Container>
    </Provider>
  )
}

export default withLive(component)
