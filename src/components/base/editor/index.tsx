import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider } from 'react-live'
import { Element, List, Text, Overlay, Portal } from '@vitus-labs/elements'
import { Container, Row, Col } from '../grid'
import Editor from './Editor'
import Preview from './Preview'
import Error from './Error'

export { LiveProvider as Provider, Editor, Error, Preview }

export default ({ children, className, editor = true, live = true }) => {
  const language = className.replace(/language-/, '')

  // mdx returns flase value as string, therefore the check below
  const showEditor = editor === true
  const showPreview = live === true

  if (showPreview && !showEditor) {
    return (
      <LiveProvider
        language={language}
        noInline={true}
        code={children}
        scope={{ Element, List, Text, Overlay, Portal }}
      >
        <Preview />
        <Error />
      </LiveProvider>
    )
  }

  if (showPreview && showEditor) {
    return (
      <LiveProvider
        language={language}
        noInline={showEditor}
        code={children}
        scope={{ Element, List, Text, Overlay, Portal }}
      >
        <Container gap={48} gutter={12} columns={2} size={1}>
          <Row>
            <Col>
              <Editor />
            </Col>
            <Col>
              <Preview />
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Error />
            </Col>
          </Row> */}
        </Container>
      </LiveProvider>
    )
  }

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
