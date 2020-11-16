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
      Overlay is a component to be used for <Highlight>dropdowns</Highlight>,{' '}
      <Highlight>popovers</Highlight>, <Highlight>tooltips</Highlight>, or even{' '}
      <Highlight>modal windows</Highlight> with triggers.
    </Text>

    <Section title="Examples">
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
    </Section>

    <Section title="Using Overlay">
      <Text>
        There are several ways of rendering text within{' '}
        <Highlight>Text</Highlight> component. So let's take a look at them.
      </Text>

      <Subsection title="Creating a dropdown">
        <Text>
          First of all, you can use <Highlight>Text</Highlight> and pass
          children.
        </Text>
        <Grid>
          <>editor</>
          <>editor</>
        </Grid>
      </Subsection>

      <Subsection title="Creating a tooltip">
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
          label={<>A content to be rendered when Overlay is open.</>}
        />
        <Prop
          name="trigger"
          type="ReactNode"
          label={
            <>An element to be used to trigger opening an overlay element.</>
          }
        />
        <Prop
          name="DOMLocation"
          type="HTMLElement"
          label={
            <>
              It uses in the background <Highlight>React Portal</Highlight>, so
              you can define where in the DOM the <Highlight>Overlay</Highlight>{' '}
              content should be attached
            </>
          }
        />
        <Prop
          name="isOpen"
          type="boolean"
          defaultValue="false"
          label={<>Defines whether it should be open by default or not</>}
        />
        <Prop
          name="openOn"
          type="click | hover | manual"
          defaultValue="click"
          label={<>Defines on which action it should get opened</>}
        />
        <Prop
          name="closeOn"
          type="click | triggerClick | hover | manual"
          defaultValue="click"
          label={<>Defines on which action it should get closed</>}
        />
        <Prop
          name="type"
          type="dropdown | tooltip | popover | modal"
          defaultValue="dropdown"
          label={
            <>
              Defines type of your overlay window and based on it it defines its
              behavior
            </>
          }
        />
        <Prop
          name="refName"
          type="string"
          defaultValue="ref"
          label={
            <>
              Overlay component access <Highlight>ref</Highlight> to directly
              mutate styles when calculation position to prevent re-renders.
              It's being used for both <Highlight>trigger</Highlight>, and{' '}
              <Highlight>children</Highlight> element at the same time. Your
              components must accept refs with the same naming.
            </>
          }
        />
        <Prop
          name="position"
          type="fixed | absolute | relative | static"
          defaultValue="fixed"
          label={
            <>
              Just a CSS property to be used for styling overlay element. You
              can change it's behavior when necessary. Accepts all available CSS
              position values.
            </>
          }
        />
        <Prop
          name="align"
          type="top | left | right | bottom"
          defaultValue="bottom"
          label={
            <>
              On which side it should be aligned to{' '}
              <Highlight>trigger</Highlight>
            </>
          }
        />
        <Prop
          name="alignX"
          type="left | center | right"
          defaultValue="left"
          label={
            <>
              It will calculate it's position horizontally based on{' '}
              <Highlight>align</Highlight> value. This will take an effect only
              when <Highlight>align</Highlight> is set to either{' '}
              <Highlight>top</Highlight>, or <Highlight>bottom</Highlight>
            </>
          }
        />
        <Prop
          name="alignY"
          type="top | center | bottom"
          defaultValue="bottom"
          label={
            <>
              It will calculate it's position horizontally based on{' '}
              <Highlight>align</Highlight> value. This will take an effect only
              when <Highlight>align</Highlight> is set to either{' '}
              <Highlight>left</Highlight>, or <Highlight>right</Highlight>
            </>
          }
        />
        <Prop
          name="offsetX"
          type="number"
          defaultValue="0"
          label={
            <>
              Horizontal offset value from <Highlight>trigger</Highlight>{' '}
              element
            </>
          }
        />
        <Prop
          name="offsetY"
          type="number"
          defaultValue="0"
          label={
            <>
              Vertical offset value from <Highlight>trigger</Highlight> element
            </>
          }
        />
        <Prop
          name="throttleDelay"
          type="number"
          defaultValue="200"
          label={<>An optimization value, being used for calculations.</>}
        />
      </Props>
    </Section>
  </Docs>
)

export default component
