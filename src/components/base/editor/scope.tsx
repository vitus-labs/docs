import { Element, List, Text, Overlay, Portal } from '@vitus-labs/elements'
import { Provider, Container, Row, Col, theme } from '@vitus-labs/coolgrid'

const defaultCss = `
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54d6ff;
`

const activeCss = `
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54d6ff;
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
