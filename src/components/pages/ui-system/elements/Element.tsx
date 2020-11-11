import React from 'react'
import Layout from '~/components/sections/elements/Layout'
import { Container, Row, Col } from '~/components/base/grid'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import Placeholder from '~/components/base/placeholders/Element'

const component = () => (
  <Layout>
    <Heading level1 name="#element">
      Element
    </Heading>
    <Text paragraph>
      Element is the smallest possible unit to be used for creating components.
      By default it renders <Text highlight>div</Text>. You can render any valid
      HTML <Text highlight>tag</Text> by passsing it as a prop.
    </Text>
    <Text paragraph>
      Element is by default <Text highlight>inline-flex</Text>. You can set{' '}
      <Text highlight>flex</Text>
      by using boolean <Text highlight>block</Text> value which will also
      stretch the element to width of <Text highlight>100%</Text>.
    </Text>
    <Text paragraph>
      Element also checks by default if <Text highlight>tag</Text> passed in is
      type of <Text highlight>inline</Text> HTML tag like{' '}
      <Text highlight>button</Text> or <Text highlight>span</Text>. If so, other
      helper sub-elements rendered inside (<Text highlight>beforeContent</Text>
      and <Text highlight>afterContent</Text> wrappers) are by default converted
      to <Text highlight>span</Text> element so it is HTML valid.
    </Text>
    {/* ----------------------------------------------- */}
    <Heading level2 name="#examples">
      Examples
    </Heading>
    <Container fluid gap={32}>
      <Row>
        <Col>editor</Col>
        <Col>
          <Placeholder
            wrapper
            beforeContent={<Placeholder inner />}
            afterContent={<Placeholder inner />}
            content={<Placeholder inner />}
          />
        </Col>
      </Row>
      <Row>
        <Col>editor</Col>
        <Col>
          <Placeholder
            vertical
            wrapper
            beforeContent={<Placeholder inner />}
            afterContent={<Placeholder inner />}
            content={<Placeholder inner />}
          />
        </Col>
      </Row>
    </Container>
    {/* ----------------------------------------------- */}
    <Heading level2>Render children</Heading>
    <Text paragraph>
      To render children inside component you can pass content as{' '}
      <Text highlight>children</Text>,<Text highlight>label</Text>, or{' '}
      <Text highlight>content</Text> prop. Label or content might be nicer or
      more comfortable for inline elements. If you pass more of them{' '}
      <Text highlight>children</Text> will <Text highlight>have</Text> the
      highest priority to be rendered and <Text highlight>label</Text> or{' '}
      <Text highlight>content</Text> will be ignored. Priorities are
      <Text highlight>children &rarr; label &rarr; content</Text>. Elements
      depends on the following packages which need to be installed as well.
    </Text>
    TODO: editor
    {/* ----------------------------------------------- */}
    <Heading level2>Before &amp; After content</Heading>
    <Text paragraph>
      You can also pass <Text highlight>beforeContent</Text> or{' '}
      <Text highlight>afterContent</Text>. This may be also kind of alternative
      to using <Text highlight>:before</Text> or <Text highlight>:after</Text>
      pseudo elements. This is useful especially in cases like buttons with
      loading icon or input wrppers with icons or anything similar.
    </Text>
    TODO: editor
    {/* ----------------------------------------------- */}
    <Heading level2>Vertical &amp; Horizontal alignment</Heading>
    <Text paragraph>
      Element can be aligned horizontally or vertically. So you can have
      <Text highlight>beforeContent</Text> on the left side of{' '}
      <Text highlight>children</Text> or above. The same applies for{' '}
      <Text highlight>afterContent</Text> (below children or on the right side).
      Check out the examples below to see more. For vertical aligning you can
      use prop <Text highlight>vertical</Text> set to{' '}
      <Text highlight>true</Text> or use <Text highlight>direction</Text> prop
      which can be set to <Text highlight>rows</Text> or{' '}
      <Text highlight>inline</Text>.
    </Text>
    <Container fluid gap={32} gutter={0}>
      <Row>
        <Col>
          <Placeholder
            wrapper
            beforeContent={<Placeholder inner />}
            afterContent={<Placeholder inner />}
            content={<Placeholder inner />}
          />
        </Col>
        <Col>
          <Placeholder
            vertical
            wrapper
            beforeContent={<Placeholder inner />}
            afterContent={<Placeholder inner />}
            content={<Placeholder inner />}
          />
        </Col>
      </Row>
    </Container>
    {/* ----------------------------------------------- */}
    <Heading level2>Vertical element inner alignment</Heading>
    <Text paragraph>
      Element can be aligned horizontally or vertically. So you can have
      <Text highlight>beforeContent</Text> on the left side of{' '}
      <Text highlight>children</Text> or above. The same applies for
      <Text highlight>afterContent</Text> (below children or on the right side).
      Check out the examples below to see more. For vertical aligning you can
      use prop <Text highlight>vertical</Text> set to{' '}
      <Text highlight>true</Text>.
    </Text>
    TODO: editor
    {/* ----------------------------------------------- */}
    <Heading level3>
      Align content, beforeContent and afterContent horizontally
    </Heading>
    <Container fluid gap={32} gutter={0}>
      <Row>
        <Col>
          <Container gap={16} gutter={0}>
            <Row>
              <Col>
                <Placeholder
                  thin
                  beforeContentAlignY="top"
                  beforeContent={<Placeholder active thinInner />}
                  content={<Placeholder thinInner />}
                  afterContent={<Placeholder thinInner />}
                />
              </Col>
              <Col>
                <Placeholder
                  thin
                  beforeContentAlignY="center"
                  beforeContent={<Placeholder active thinInner />}
                  content={<Placeholder thinInner />}
                  afterContent={<Placeholder thinInner />}
                />
              </Col>
              <Col>
                <Placeholder
                  thin
                  beforeContentAlignY="bottom"
                  beforeContent={<Placeholder active thinInner />}
                  content={<Placeholder thinInner />}
                  afterContent={<Placeholder thinInner />}
                />
              </Col>
            </Row>
          </Container>
          <Text centered>something here</Text>
        </Col>
        <Col>
          <Container gap={16} gutter={0}>
            <Row>
              <Col>
                <Placeholder
                  thin
                  contentAlignY="top"
                  beforeContent={<Placeholder thinInner />}
                  content={<Placeholder active thinInner />}
                  afterContent={<Placeholder thinInner />}
                />
              </Col>
              <Col>
                <Placeholder
                  thin
                  contentAlignY="center"
                  beforeContent={<Placeholder thinInner />}
                  content={<Placeholder active thinInner />}
                  afterContent={<Placeholder thinInner />}
                />
              </Col>
              <Col>
                <Placeholder
                  thin
                  contentAlignY="bottom"
                  beforeContent={<Placeholder thinInner />}
                  content={<Placeholder active thinInner />}
                  afterContent={<Placeholder thinInner />}
                />
              </Col>
            </Row>
          </Container>
          <Text centered>something here</Text>
        </Col>
        <Col>
          <Container gap={16} gutter={0}>
            <Row>
              <Col>
                <Placeholder
                  thin
                  afterContentAlignY="top"
                  beforeContent={<Placeholder thinInner />}
                  content={<Placeholder thinInner />}
                  afterContent={<Placeholder active thinInner />}
                />
              </Col>
              <Col>
                <Placeholder
                  thin
                  afterContentAlignY="center"
                  beforeContent={<Placeholder thinInner />}
                  content={<Placeholder thinInner />}
                  afterContent={<Placeholder active thinInner />}
                />
              </Col>
              <Col>
                <Placeholder
                  thin
                  afterContentAlignY="bottom"
                  beforeContent={<Placeholder thinInner />}
                  content={<Placeholder thinInner />}
                  afterContent={<Placeholder active thinInner />}
                />
              </Col>
            </Row>
          </Container>
          <Text centered>something here</Text>
        </Col>
      </Row>
    </Container>
    TODO: editor
    {/* ----------------------------------------------- */}
    <Heading level3>
      Align content, beforeContent and afterContent vertically
    </Heading>
    TODO: editor
  </Layout>
)

export default component
