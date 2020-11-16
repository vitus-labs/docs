import React, { FC } from 'react'
import {
  Docs,
  Section,
  Subsection,
  Grid,
  Column,
  Caption,
  Text,
  Highlight,
  Props,
  Prop,
} from '~/components/docs'
import Placeholder from '~/components/base/placeholders/Element'

const component: FC = () => (
  <Docs title="Element">
    <Text>
      Element is the smallest possible unit to be used for creating components.
      By default it renders <Highlight>div</Highlight>. You can render any valid
      HTML <Highlight>tag</Highlight> by passsing it as a prop.
    </Text>

    <Text>
      Element is by default <Highlight>inline-flex</Highlight>. You can set{' '}
      <Highlight>flex</Highlight> by using boolean <Highlight>block</Highlight>{' '}
      value which will also stretch the element to width of{' '}
      <Highlight>100%</Highlight>.
    </Text>

    <Text>
      Element also checks by default if <Highlight>tag</Highlight> passed in is
      type of <Highlight>inline</Highlight> HTML tag like{' '}
      <Highlight>button</Highlight> or <Highlight>span</Highlight>. If so, other
      helper sub-elements rendered inside (<Highlight>beforeContent</Highlight>{' '}
      and <Highlight>afterContent</Highlight> wrappers) are by default converted
      to <Highlight>span</Highlight> element so it is HTML valid.
    </Text>

    <Section title="Examples">
      <Grid>
        editor
        <Placeholder
          wrapper
          beforeContent={<Placeholder inner />}
          afterContent={<Placeholder inner />}
          content={<Placeholder inner />}
        />
      </Grid>

      <Grid>
        editor
        <Placeholder
          vertical
          wrapper
          beforeContent={<Placeholder inner />}
          afterContent={<Placeholder inner />}
          content={<Placeholder inner />}
        />
      </Grid>
    </Section>

    <Section title="Render children">
      <Text>
        To render children inside component you can pass content as{' '}
        <Highlight>children</Highlight>, <Highlight>label</Highlight>, or{' '}
        <Highlight>content</Highlight> prop. Label or content might be nicer or
        more comfortable for inline elements. If you pass more of them{' '}
        <Highlight>children</Highlight> will <Highlight>have</Highlight> the
        highest priority to be rendered and <Highlight>label</Highlight> or{' '}
        <Highlight>content</Highlight> will be ignored. Priorities are{' '}
        <Highlight>children &rarr; content &rarr; label</Highlight>. Elements
        depends on the following packages which need to be installed as well.
      </Text>

      <Grid>
        <>TODO: editor</>
        <>preview</>
      </Grid>
    </Section>

    <Section title="Before & After content">
      <Text>
        You can also pass <Highlight>beforeContent</Highlight> or{' '}
        <Highlight>afterContent</Highlight>. This may be also kind of
        alternative to using <Highlight>:before</Highlight> or{' '}
        <Highlight>:after</Highlight> pseudo elements. This is useful especially
        in cases like buttons with loading icon or input wrppers with icons or
        anything similar.
      </Text>
      <Grid>
        <>TODO: editor</>
        <>preview</>
      </Grid>
    </Section>

    <Section title="Vertical & Horizontal alignment">
      <Text>
        Element can be aligned horizontally or vertically. So you can have{' '}
        <Highlight>beforeContent</Highlight> on the left side of{' '}
        <Highlight>children</Highlight> or above. The same applies for{' '}
        <Highlight>afterContent</Highlight> (below children or on the right
        side). Check out the examples below to see more. For vertical aligning
        you can use prop <Highlight>vertical</Highlight> set to{' '}
        <Highlight>true</Highlight> or use <Highlight>direction</Highlight> prop
        which can be set to <Highlight>rows</Highlight> or{' '}
        <Highlight>inline</Highlight>.
      </Text>

      <Grid>
        <Placeholder
          wrapper
          beforeContent={<Placeholder inner />}
          afterContent={<Placeholder inner />}
          content={<Placeholder inner />}
        />
        <Placeholder
          vertical
          wrapper
          beforeContent={<Placeholder inner />}
          afterContent={<Placeholder inner />}
          content={<Placeholder inner />}
        />
      </Grid>
    </Section>

    <Section title="Horizontal element">
      <Text>
        Element can be aligned horizontally or vertically. So you can have
        <Highlight>beforeContent</Highlight> on the left side of{' '}
        <Highlight>children</Highlight> or above. The same applies for
        <Highlight>afterContent</Highlight> (below children or on the right
        side). Check out the examples below to see more. For vertical aligning
        you can use prop <Highlight>vertical</Highlight> set to{' '}
        <Highlight>true</Highlight>.
      </Text>

      <Subsection title="Align content, beforeContent and afterContent horizontally">
        <Grid columns={3}>
          <Column>
            <Placeholder
              thin
              beforeContentAlignX="left"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              thin
              beforeContentAlignX="center"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              thin
              beforeContentAlignX="right"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Caption>
              <Highlight>beforeContent</Highlight> aligned (left, center, right)
            </Caption>
          </Column>

          <Column>
            <Placeholder
              thin
              contentAlignX="left"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              thin
              contentAlignX="center"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              thin
              contentAlignX="right"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Caption>
              <Highlight>children / content / label</Highlight> aligned (left,
              center, right)
            </Caption>
          </Column>

          <Column>
            <Placeholder
              thin
              afterContentAlignX="left"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Placeholder
              thin
              afterContentAlignX="center"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Placeholder
              thin
              afterContentAlignX="right"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Caption>
              <Highlight>afterContent</Highlight> aligned (left, center, right)
            </Caption>
          </Column>
        </Grid>
      </Subsection>

      <Subsection title="Align content, beforeContent and afterContent vertically">
        <Grid columns={3}>
          <Column>
            <Placeholder
              thin
              beforeContentAlignY="top"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              thin
              beforeContentAlignY="center"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              thin
              beforeContentAlignY="bottom"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Caption>
              <Highlight>beforeContent</Highlight> aligned (top, center, bottom)
            </Caption>
          </Column>

          <Column>
            <Placeholder
              thin
              contentAlignY="top"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              thin
              contentAlignY="center"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              thin
              contentAlignY="bottom"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Caption>
              <Highlight>children / content / label</Highlight> aligned (top,
              center, bottom)
            </Caption>
          </Column>

          <Column>
            <Placeholder
              thin
              afterContentAlignY="top"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Placeholder
              thin
              afterContentAlignY="center"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Placeholder
              thin
              afterContentAlignY="bottom"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Caption>
              <Highlight>afterContent</Highlight> aligned (top, center, bottom)
            </Caption>
          </Column>
        </Grid>
      </Subsection>
    </Section>

    <Section title="Vertical element">
      <Text>
        Element can be aligned horizontally or vertically. So you can have{' '}
        <Highlight>beforeContent</Highlight> on the left side of{' '}
        <Highlight>children</Highlight> or above. The same applies for{' '}
        <Highlight>afterContent</Highlight> (below children or on the right
        side). Check out the examples below to see more. For vertical aligning
        you can use prop <Highlight>vertical</Highlight> set to{' '}
        <Highlight>true</Highlight> or use <Highlight>direction</Highlight> prop
        which can be set to <Highlight>rows</Highlight> or{' '}
        <Highlight>inline</Highlight>.
      </Text>

      <Subsection title="Align content, beforeContent and afterContent horizontally">
        <Grid columns={3}>
          <Column>
            <Placeholder
              vertical
              thin
              beforeContentAlignX="left"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              vertical
              thin
              beforeContentAlignX="center"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              vertical
              thin
              beforeContentAlignX="right"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Caption>
              <Highlight>beforeContent</Highlight> aligned (left, center, right)
            </Caption>
          </Column>

          <Column>
            <Placeholder
              vertical
              thin
              contentAlignX="left"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              vertical
              thin
              contentAlignX="center"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              vertical
              thin
              contentAlignX="right"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Caption>
              <Highlight>children / content / label</Highlight> aligned (left,
              center,right)
            </Caption>
          </Column>

          <Column>
            <Placeholder
              vertical
              thin
              afterContentAlignX="left"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Placeholder
              vertical
              thin
              afterContentAlignX="center"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Placeholder
              vertical
              thin
              afterContentAlignX="right"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Caption>
              <Highlight>afterContent</Highlight> aligned (left, center, right)
            </Caption>
          </Column>
        </Grid>
      </Subsection>

      <Subsection title="Align content, beforeContent and afterContent vertically">
        <Grid>
          <Column>
            <Placeholder
              vertical
              thin
              beforeContentAlignY="top"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              vertical
              thin
              beforeContentAlignY="center"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              vertical
              thin
              beforeContentAlignY="bottom"
              beforeContent={<Placeholder active thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Caption>
              <Highlight>beforeContent</Highlight> aligned (left, center, right)
            </Caption>
          </Column>

          <Column>
            <Placeholder
              vertical
              thin
              contentAlignY="top"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              vertical
              thin
              contentAlignY="center"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Placeholder
              vertical
              thin
              contentAlignY="bottom"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder active thinInner />}
              afterContent={<Placeholder thinInner />}
            />
            <Caption>
              <Highlight>children / content / label</Highlight> aligned (left,
              center,right)
            </Caption>
          </Column>

          <Column>
            <Placeholder
              vertical
              thin
              afterContentAlignY="top"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Placeholder
              vertical
              thin
              afterContentAlignY="center"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Placeholder
              vertical
              thin
              afterContentAlignY="bottom"
              beforeContent={<Placeholder thinInner />}
              content={<Placeholder thinInner />}
              afterContent={<Placeholder active thinInner />}
            />
            <Caption>
              <Highlight>afterContent</Highlight> aligned (left, center, right)
            </Caption>
          </Column>
        </Grid>
      </Subsection>
    </Section>
    <Section title="Props">
      <Text>
        These are props to which can be passed to <Highlight>Element</Highlight>
      </Text>
      <Props>
        <Prop
          name="tag"
          defaultValue="div"
          type="HTMLElement tag"
          label="A prop which will change HTML tag of the element"
        />
        <Prop name="children" type="ReactNode" label="Simply children" />
        <Prop
          name="content"
          type="ReactNode"
          label={
            <>
              A prop which can be used instead of
              <Highlight>children</Highlight>
            </>
          }
        />
        <Prop
          name="label"
          type="ReactNode"
          label={
            <>
              A prop which can be used instead of
              <Highlight>children</Highlight>
            </>
          }
        />
        <Prop
          name="tag"
          defaultValue="div"
          type="HTMLElement tag"
          label="A prop which will change HTML tag of the element"
        />
        <Prop
          name="tag"
          defaultValue="div"
          type="HTMLElement tag"
          label="A prop which will change HTML tag of the element"
        />
        <Prop
          name="block"
          defaultValue="false"
          type="boolean"
          label={
            <>
              Whether should behave as <Highlight>inline</Highlight> or{' '}
              <Highlight>block</Highlight> element
            </>
          }
        />
        <Prop
          name="equalCols"
          defaultValue="false"
          type="boolean"
          label="Whether should all inner elements have the same width / height"
        />
        <Prop
          name="gap"
          defaultValue="0"
          type="number"
          label="Defines space between beforeContent | content | afterContent"
        />
        <Prop
          name="vertical"
          defaultValue="false"
          type="boolean"
          label="Defines if element should render vertically"
        />
        <Prop
          name="vertical"
          defaultValue="false"
          type="boolean"
          label="Defines if element should render vertically"
        />
        <Prop
          name="direction"
          defaultValue="inline"
          type="inline | rows"
          label={
            <>
              Define whether element should render horizontally or vertically.
              Does the same job as <Highlight>vertical</Highlight> prop and
              takes a precedenc over that prop
            </>
          }
        />
        <Prop
          name="alignX"
          defaultValue="left"
          type="left | center | right | spaceBetween | spaceAround | block"
          label={
            <>
              Define alignment of <Highlight>beforeContent</Highlight>,{' '}
              <Highlight>content</Highlight>, and{' '}
              <Highlight>afterContent</Highlight> with respect to root element.
            </>
          }
        />
        <Prop
          name="alignY"
          defaultValue="left"
          type="top | center | bottom"
          label={
            <>
              Define alignment of <Highlight>beforeContent</Highlight>,{' '}
              <Highlight>content</Highlight>, and{' '}
              <Highlight>afterContent</Highlight> with respect to root element.
            </>
          }
        />
        <Prop
          name="beforeContent"
          type="ReactNode"
          label={
            <>
              A <Highlight>children</Highlight> to be rendered inside{' '}
              <Highlight>beforeContent</Highlight> wrapper.
            </>
          }
        />
        <Prop
          name="afterContent"
          type="ReactNode"
          label={
            <>
              A <Highlight>children</Highlight> to be rendered inside{' '}
              <Highlight>afterContent</Highlight> wrapper.
            </>
          }
        />
        <Prop
          name="css"
          type="string | function | css styled-components function"
          label={
            <>
              If you need to add an additional styling to the root element, you
              can do so by injecting styles using this property
            </>
          }
        />
        <Prop
          name="contentCss"
          type="string | function | css styled-components function"
          label={
            <>
              If you need to add an additional styling to the content element,
              you can do so by injecting styles using this property.
            </>
          }
        />
        <Prop
          name="beforeContentCss"
          type="string | function | css styled-components function"
          label={
            <>
              If you need to add an additional styling to the beforeContent
              element, you can do so by injecting styles using this property
            </>
          }
        />
        <Prop
          name="afterContentCss"
          type="string | function | css styled-components function"
          label={
            <>
              If you need to add an additional styling to the afterContent
              element, you can do so by injecting styles using this property
            </>
          }
        />
        <Prop
          name="contentDirection"
          defaultValue="inline"
          type="inline | rows"
          label={
            <>
              Define whether children in content wrapper should be rendered in
              line or in rows
            </>
          }
        />
        <Prop
          name="contentAlignX"
          defaultValue="left"
          type="left | center | right | spaceBetween | spaceAround | block"
          label={<>Define how children in content wrapper should be aligned</>}
        />
        <Prop
          name="contentAlignY"
          defaultValue="center"
          type="top | center | bottom | spaceBetween | spaceAround | block"
          label={<>Define how children in content wrapper should be aligned</>}
        />
        <Prop
          name="beforeContentDirection"
          defaultValue="inline"
          type="inline | rows"
          label={
            <>
              Define whether children in beforeContent wrapper should be
              rendered in line or in rows
            </>
          }
        />
        <Prop
          name="beforeContentAlignX"
          defaultValue="left"
          type="left | center | right | spaceBetween | spaceAround | block"
          label={
            <>Define how children in beforeContent wrapper should be aligned</>
          }
        />
        <Prop
          name="beforeContentAlignY"
          defaultValue="center"
          type="top | center | bottom | spaceBetween | spaceAround | block"
          label={
            <>Define how children in beforeContent wrapper should be aligned</>
          }
        />
        <Prop
          name="afterContentDirection"
          defaultValue="inline"
          type="inline | rows"
          label={
            <>
              Define whether children in afterContent wrapper should be rendered
              in line or in rows
            </>
          }
        />
        <Prop
          name="afterContentAlignX"
          defaultValue="left"
          type="left | center | right | spaceBetween | spaceAround | block"
          label={
            <>Define how children in afterContent wrapper should be aligned</>
          }
        />
        <Prop
          name="afterContentAlignY"
          defaultValue="center"
          type="top | center | bottom | spaceBetween | spaceAround | block"
          label={
            <>Define how children in afterContent wrapper should be aligned</>
          }
        />
        <Prop
          name="ref"
          type="React ref"
          label={
            <>
              It uses <Highlight>forwardRef</Highlight> on background so you can
              use <Highlight>ref</Highlight> normally
            </>
          }
        />
        <Prop
          name="innerRef"
          type="React ref"
          label={
            <>
              This is just a fallback for <Highlight>ref</Highlight> in case you
              cannot pass ref
            </>
          }
        />
      </Props>
    </Section>
  </Docs>
)

export default component
