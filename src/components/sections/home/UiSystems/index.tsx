import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Section from '../components/Section'
import Box from '../components/Box'

export default () => (
  <Section
    heading="Build better universal UI Systems"
    label="Set of preconfigured tools ready to be used"
  >
    <Container gap={20}>
      <Row>
        <Col>
          <Box heading="Elements" icon="" label="Toolking" />
        </Col>
        <Col>
          <Box heading="Rocketstyle" icon="" label="Toolking" />
        </Col>
        <Col>
          <Box heading="Unistyle" icon="" label="Toolking" />
        </Col>
        <Col>
          <Box heading="Coolgrid" icon="" label="Toolking" />
        </Col>
      </Row>
    </Container>
  </Section>
)
