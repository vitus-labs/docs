import React, { FC } from 'react'
import { withLive } from 'react-live'
import { Container, Row, Col } from '~/components/base/grid'
import { Provider, Editor, Error, Preview } from '~/components/base/editor'

type Props = {
  // live: object
  code: string
  scope: object
  noInline?: boolean
  disabled?: boolean
}

const component: FC<Props> = ({
  live = {},
  code,
  scope,
  noInline = true,
  disabled,
}) => {
  const { error } = live
  return (
    <Provider code={code} scope={scope} noInline={noInline}>
      <Container gap={48} gutter={0}>
        <Row>
          <Col>
            <Editor disabled={disabled} />
          </Col>
          {!disabled && (
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
