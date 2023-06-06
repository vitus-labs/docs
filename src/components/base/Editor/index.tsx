import { FC } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { LiveProvider } from 'react-live'
import { Container, Row, Col } from '~/components/grid'
import ContentBox from './ContentBox'
import Editor from './Editor'
import Preview from './Preview'
import Error from './Error'
import scope from './scope'

const codeTheme = themes.palenight

type Props = {
  children: string
  className?: string
  editor?: boolean
  live?: boolean
  view?: 'horizontal' | 'vertical'
  preview?: string
}

const Component: FC<Props> = ({
  children,
  className,
  editor = true,
  live = true,
  view,
  preview,
}) => {
  const language = className ? className.replace(/language-/, '') : ''

  // mdx returns flase value as string, therefore the check below
  const showEditor = editor === true
  const showPreview = live === true
  const isVertical = view === 'vertical'

  if (showPreview && !showEditor) {
    return (
      <LiveProvider
        language={language}
        noInline
        code={children}
        scope={scope}
        theme={codeTheme}
      >
        <Container
          gap={32}
          gutter={12}
          columns={12}
          size={8}
          contentAlignX="center"
        >
          <Row>
            <Col>
              <Preview view={preview} compact />
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
        theme={codeTheme}
      >
        <Container gap={32} gutter={12} columns={2} size={isVertical ? 2 : 1}>
          <Row>
            <Col size={{ xs: 2, md: 1 }}>
              <Editor resetIndent />
            </Col>
            <Col size={{ xs: 2, md: 1 }}>
              <Preview view={preview} />
            </Col>
          </Row>
        </Container>
      </LiveProvider>
    )
  }

  return (
    <ContentBox compact>
      <Highlight theme={codeTheme} code={children} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre className={className}>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </ContentBox>
  )
}

export default Component
