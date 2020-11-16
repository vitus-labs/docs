import React, { Children } from 'react'
import { Container, Row, Col } from '~/components/base/grid'

const component = ({ children, columns = 2 }) => {
  return (
    <Container fluid gap={32} gutter={0}>
      <Row>
        {Children.map(children, (child, i) => (
          <Col key={i}>{child}</Col>
        ))}
      </Row>
    </Container>
  )
}

export default component
