import { VFC } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider } from 'react-live'
import { Container, Row, Col } from '../grid'
import Editor from './Editor'
import Preview from './Preview'
import Error from './Error'
import scope from './scope'

type Props = {
  children: string
}

const component: VFC<Props> = ({
  children,
  className,
  editor = true,
  live = true,
  view,
}) => {
  const language = className.replace(/language-/, '')

  // mdx returns flase value as string, therefore the check below
  const showEditor = editor === true
  const showPreview = live === true
  const isVertical = view === 'vertical'

  if (showPreview && !showEditor) {
    return (
      <LiveProvider
        language={language}
        noInline={true}
        code={children}
        scope={scope}
      >
        <Container gap={48} gutter={12} columns={2} size={1}>
          <Row>
            <Col>
              <Preview />
            </Col>
          </Row>
          <Row>
            <Col>
              <Error />
            </Col>
          </Row>
        </Container>
      </LiveProvider>
    )
  }

  if (showPreview && showEditor) {
    return (
      <LiveProvider
        language={language}
        noInline={showEditor}
        code={children}
        scope={scope}
      >
        <Container gap={48} gutter={12} columns={2} size={isVertical ? 2 : 1}>
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

  // return (
  //   <LiveProvider
  //     language={language}
  //     noInline={false}
  //     code={children}
  //     scope={scope}
  //   >
  //     <Container gap={48} gutter={12} columns={2} size={1}>
  //       <Row>
  //         <Col>
  //           <Editor />
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col>
  //           <Error />
  //         </Col>
  //       </Row>
  //     </Container>
  //   </LiveProvider>
  // )

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

export default component
