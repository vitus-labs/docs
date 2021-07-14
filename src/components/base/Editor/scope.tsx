import { Element, List, Text, Overlay, Portal } from '@vitus-labs/elements'
import { Provider, Container, Row, Col, theme } from '@vitus-labs/coolgrid'

const defaultCss = `
  background: rgba(134, 194, 50, 0.4);
  border: 1px solid #86C232;
  color: #fff;
`

const activeCss = `
  background: #86C232;
  border: 1px solid #86C232;
  color: #fff;
`

export default {
  Element,
  List,
  Text,
  Overlay,
  Portal,
  Provider,
  Container,
  Row,
  Col,
  theme,
  defaultCss,
  activeCss,
}
