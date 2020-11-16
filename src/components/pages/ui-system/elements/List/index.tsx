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
  <Docs title="List">
    <Text>
      List is a basic component to render simple lists. It could help you
      avoiding repeatable patterns and using <Highlight>map</Highlight> function
      repeatedly.
    </Text>
    <Text>
      Secondly, it migh help you keeping components more structured and
      organized.
    </Text>

    <Section title="Examples">
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
    </Section>

    <Section title="Render items">
      <Text>
        There are several ways of rendering children within{' '}
        <Highlight>List</Highlight> component. So let's take a look at them.
      </Text>
      <Subsection title="Render children">
        <Text>
          First of all, you can use <Highlight>List</Highlight> as a wrapper for
          your components and just pass children normally in React
        </Text>
        <Grid>
          <>editor</>
          <>editor</>
        </Grid>
      </Subsection>
      <Subsection title="Render from array">
        <Text>
          Another way of rendering children is passing a props{' '}
          <Highlight>data</Highlight> and <Highlight>component</Highlight> to
          List component and it will iterate on the background and render list
          of elements.
        </Text>
        <Grid>
          <>editor</>
          <>editor</>
        </Grid>
      </Subsection>
    </Section>

    <Section title="Data props">
      <Text>
        Prop <Highlight>data</Highlight> must be of <Highlight>Array</Highlight>{' '}
        type, but the items within array can be of different types.
      </Text>

      <Subsection title="Array of objects">
        <Text>
          Probably most common case is to render array of objects as a list.
          This can be simply done by following example:
        </Text>
        <Grid>
          <>editor</>
          <>editor</>
        </Grid>
      </Subsection>

      <Subsection title="Array of strings or numbers">
        <Text>
          Sometimes you just want to render list of items which accepts only one
          prop of type <Highlight>string</Highlight> or{' '}
          <Highlight>number</Highlight>. In that case you can just simply pass
          array of values as <Highlight>data</Highlight> prop. See the following
          example:
        </Text>
        <Grid>
          <>editor</>
          <>editor</>
        </Grid>
        <Text>
          As there is always need to add a <Highlight>key</Highlight> when
          rendering elements dynamically, you don't have to worry about it. It
          will add a key for you.
        </Text>
      </Subsection>
    </Section>

    <Section title="Item key value">
      <Text>
        By default, it will look for <Highlight>key</Highlight>,{' '}
        <Highlight>id</Highlight>, <Highlight>itemId</Highlight> in your item
        object within <Highlight>data</Highlight> prop. In case there is no
        value from those mentined previously, it will fallback to
        <Highlight>map index</Highlight> value.
      </Text>
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
      <Text>
        Item key value can be customizable as well. You can pass{' '}
        <Highlight>itemKey</Highlight> prop which can be either type of{' '}
        <Highlight>string</Highlight> or a <Highlight>function</Highlight>.
      </Text>
      <Text>
        When passing a string value, <Highlight>List</Highlight> will use it as
        a key name of ite object.
      </Text>
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
      <Text>
        By passing a function value you can create a customized{' '}
        <Highlight>key</Highlight> for each element. See the example below:
      </Text>
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
    </Section>

    <Section title="Custom item component">
      <Text>
        In that case, you want to render items but some of them need to be
        render using different component, you may just want to add a{' '}
        <Highlight>component</Highlight> prop into you object data item. See the
        following example:
      </Text>
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
    </Section>

    <Section title="Custom item props">
      <Text>
        You can even <Highlight>data</Highlight> create dynamically by using{' '}
        <Highlight>itemProps</Highlight> prop.This prop can be either an object
        or a callback function which receives item props.
      </Text>
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
    </Section>

    <Section title="Extend props">
      <Text>
        If you want to render a list of elements but some of the props are
        static values which would be repeated within each item, then using{' '}
        <Highlight>extendProps</Highlight> may come handy. It could be useful
        for example for component UI state. See the example below.
      </Text>
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
    </Section>

    <Section title="Wrap your item component by another component">
      <Text>
        If you would like to render a list of items but need to wrap each
        element to another component, then there is no need to create a new
        component where you combine them together. You can just use{' '}
        <Highlight>wrapComponent</Highlight> prop to add a wrapping component.
        See the following example.
      </Text>
      <Grid>
        <>editor</>
        <>editor</>
      </Grid>
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
              Children to List can be passed manually by using
              <Highlight>children</Highlight> prop.
            </>
          }
        />
        <Prop
          name="component"
          type="ComponentType"
          label="A component to be rendered per item"
        />
        <Prop
          name="data"
          type="Array"
          label="An array of item values to be passed to item component"
        />
        <Prop
          name="itemKey"
          type="string | function"
          label="Prop for defining item key name / value if default behavior doesn't work out"
        />
        <Prop
          name="wrapComponent"
          type="ComponentType"
          label="A component to be used as a wrapper component for item component"
        />
        <Prop
          name="itemProps"
          type="object | function"
          label="A custobizable hook for dynamically render props for each item"
        />
        <Prop
          name="extendProps"
          type="object"
          label="A static way of defining extensive props to be applied for all items"
        />
        <Prop
          name="rootElement"
          type="boolean"
          defaultValue="false"
          label={
            <>
              Whether a root element should be rendered or the output should be
              just a type of React <Highlight>Fragment</Highlight>
            </>
          }
        />
      </Props>
    </Section>
  </Docs>
)

export default component
