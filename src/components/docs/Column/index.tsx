import { FC, Children } from 'react'
import { Container, Row, Col } from '~/components/base/grid'

type Props = {
  columns?: number
}

const component: FC<Props> = ({ children, columns = 2 }) => {
  return (
    <Container fluid gap={16} gutter={0}>
      {Children.map(children, (child, i) => (
        <Row>
          <Col key={i}>{child}</Col>
        </Row>
      ))}
    </Container>
  )
}

export default component
