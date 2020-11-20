import React from 'react'
import {
  Docs,
  Section,
  Grid,
  Text,
  Highlight,
  Props,
  Prop,
  Editor,
} from '~/components/docs'
import { scope, examples } from './examples'

const component = () => (
  <Docs title="Portal">
    <Text>
      Portal is just a normal <Highlight>React Portal</Highlight> component with
      some prop extensions.
    </Text>

    <Section title="Examples">
      <Editor scope={scope} code={examples} />
    </Section>

    <Section title="Props">
      <Text>
        These are props to which can be passed to <Highlight>List</Highlight>
      </Text>
      <Props>
        <Prop
          name="children"
          type="ReactNode"
          label={<>A content to be rendered when Overlay is open.</>}
        />
        <Prop
          name="position"
          type="HTMLElement"
          label={
            <>
              Define where in the DOM the <Highlight>Portal</Highlight> will be
              appended
            </>
          }
        />
        <Prop
          name="tag"
          type="HTMLElement tag"
          defaultValue="div"
          label={
            <>
              Define tag to be rendered as a wrapping element for{' '}
              <Highlight>children</Highlight> content
            </>
          }
        />
      </Props>
    </Section>
  </Docs>
)

export default component
