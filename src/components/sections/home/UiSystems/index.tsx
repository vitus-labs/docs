import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Section from '../components/Section'
import Box from '../components/Box'

const component = () => (
  <Section
    heading="Build better universal UI Systems"
    label="Set of preconfigured tools ready to be used"
  >
    <Container gap={36}>
      <Row>
        <Col>
          <Box
            link={(r) => r.uiSystem.elements.base}
            heading="Elements"
            icon="elements"
            label="Toolking"
          />
        </Col>
        <Col>
          <Box
            link={(r) => r.uiSystem.rocketstyle.base}
            heading="Rocketstyle"
            icon="rocketstyle"
            label="Toolking"
          />
        </Col>
        <Col>
          <Box
            link={(r) => r.uiSystem.unistyle.base}
            heading="Unistyle"
            icon="unistyle"
            label="Toolking"
          />
        </Col>
        <Col>
          <Box
            link={(r) => r.uiSystem.coolgrid.base}
            heading="Coolgrid"
            icon="coolgrid"
            label="Toolking"
          />
        </Col>
      </Row>
    </Container>
  </Section>
)

export default component
