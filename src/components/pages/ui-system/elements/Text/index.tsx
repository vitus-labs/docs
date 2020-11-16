import React from 'react'
import {
  Docs,
  Section,
  Grid,
  Text,
  Highlight,
  Subsection,
  Props,
  Prop,
} from '~/components/docs'

const component = () => (
  <Docs title="Overlay">
    <Text>
      Text is a basic component to simply render text content. By default, it
      has reseted some styling.
    </Text>

    <Section title="Examples">
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
    </Section>

    <Section title="Using Text component">
      <Text>
        There are several ways of rendering text within{' '}
        <Highlight>Text</Highlight> component. So let's take a look at them.
      </Text>

      <Subsection title="Children prop">
        <Text>
          First of all, you can use <Highlight>Text</Highlight> and pass
          children.
        </Text>
        <Grid>
          <>editor</>
          <>editor</>
        </Grid>
      </Subsection>

      <Subsection title="Label prop">
        <Text>
          For shorter texts, or inline texts sometimes it's nicer to write
          inline prop. If you prefer using it this way, then{' '}
          <Highlight>label</Highlight> prop could be used. In case of passing
          both <Highlight>children</Highlight> and <Highlight>label</Highlight>,
          then <Highlight>children</Highlight> will have a priority and{' '}
          <Highlight>label</Highlight> will be ignored.
        </Text>
        <Grid>
          <>editor</>
          <>editor</>
        </Grid>
      </Subsection>
    </Section>

    <Section title="Props">
      <Text>
        These are props to which can be passed to <Highlight>List</Highlight>
      </Text>
      <Props>
        <Prop
          name="children"
          type="ReactNode"
          label={
            <>
              Children to be rendered within
              <Highlight>Text</Highlight> component.
            </>
          }
        />
        <Prop
          name="label"
          type="ReactNode"
          label={
            <>
              Label can be used instead of children for inline syntax. But{' '}
              <Highlight>children</Highlight> prop takes a precedence
            </>
          }
        />
        <Prop
          name="paragraph"
          type="boolean"
          label={
            <>
              Defines whether should behave as a block text element.
              Automatically adds <Highlight>p</Highlight> HTML tag
            </>
          }
        />
        <Prop
          name="tag"
          type="HTML valid tag"
          label={<>Defines what kind of HTML tag should be rendered</>}
        />
      </Props>
    </Section>
  </Docs>
)

export default component
