import React from 'react'
import {
  Docs,
  Section,
  Link,
  Text,
  Highlight,
  Subsection,
  Props,
  Prop,
  Editor,
} from '~/components/docs'
import {
  scope,
  examples,
  renderChildren,
  renderFromArray,
  renderFromArrayObjects,
  renderFromArrayStrings,
  itemKeyValueString,
  itemKeyValueFunction,
  customItemComponent,
  customItemProps,
  extendProps,
  wrappingItem,
} from './examples'

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

    <Section title="Example">
      <Editor scope={scope} code={examples} />
    </Section>

    <Section title="Render items">
      <Text>
        There are several ways of rendering children within{' '}
        <Highlight>List</Highlight> component. So let's take a look at them.
      </Text>
      <Subsection title="Render children">
        <Text>
          First of all, you can use <Highlight>List</Highlight> as a wrapper for
          your components and just pass children normally like you do in React.
        </Text>
        <Editor scope={scope} code={renderChildren} />
      </Subsection>

      <Subsection title="Render from array">
        <Text>
          Another way of rendering children is passing a props{' '}
          <Highlight>data</Highlight> and <Highlight>component</Highlight> to
          List component and it will iterate on the background and render list
          of elements.
        </Text>
        <Editor scope={scope} code={renderFromArray} />
      </Subsection>
    </Section>

    <Section title="Data props">
      <Text>
        Prop <Highlight>data</Highlight> must be of <Highlight>Array</Highlight>{' '}
        type, but the items within array can be of different types.
      </Text>

      <Subsection title="Array of objects">
        <Text>
          Probably the most common case is to render array of objects as a list.
          This can be simply done by following example:
        </Text>
        <Editor scope={scope} code={renderFromArrayObjects} />
      </Subsection>

      <Subsection title="Array of strings or numbers">
        <Text>
          Sometimes you just want to render list of items which accepts only one
          prop of type <Highlight>string</Highlight> or{' '}
          <Highlight>number</Highlight>. In that case you can just simply pass
          array of values as <Highlight>data</Highlight> prop. It also filters{' '}
          <Highlight>null</Highlight> and <Highlight>undefined</Highlight>{' '}
          values, therefore doesn't render empty elements which could lead to
          throwing errors.
        </Text>
        <Editor scope={scope} code={renderFromArrayStrings} />
        <Text>
          As there is always need to add a <Highlight>key</Highlight> when
          rendering elements dynamically, you don't have to worry about it. It
          will add a{' '}
          <Link external href="https://reactjs.org/docs/lists-and-keys.html">
            key
          </Link>{' '}
          for you out of the box.
        </Text>
      </Subsection>
    </Section>

    <Section title="Item key value">
      <Text>
        By default, it will look for <Highlight>key</Highlight> &rarr;{' '}
        <Highlight>id</Highlight> &rarr; <Highlight>itemId</Highlight> in your
        item object within <Highlight>data</Highlight> prop. In case there is no
        value from those mentioned previously, it will fallback to{' '}
        <Highlight>index</Highlight> value from map function.
      </Text>
      <Text>
        Item key value can be customizable as well. You can pass{' '}
        <Highlight>itemKey</Highlight> prop which can be either type of{' '}
        <Highlight>string</Highlight> or a <Highlight>function</Highlight>.
      </Text>
      <Text>
        When passing a string value, <Highlight>List</Highlight> will use it as
        a key name from item object.
      </Text>
      <Editor scope={scope} code={itemKeyValueString} />
      <Text>
        By passing a function value you can create a customized{' '}
        <Highlight>key</Highlight> for each element.
      </Text>
      <Editor scope={scope} code={itemKeyValueFunction} />
    </Section>

    <Section title="Custom item component">
      <Text>
        In that case, you want to render items but some of them need to be
        render using different component, you may just want to add a{' '}
        <Highlight>component</Highlight> prop into you object data item.
      </Text>
      <Editor scope={scope} code={customItemComponent} />
    </Section>

    <Section title="Custom item props">
      <Text>
        You can even <Highlight>data</Highlight> create dynamically by using{' '}
        <Highlight>itemProps</Highlight> prop. This prop can be either an object
        or a callback function which receives item props.
      </Text>
      <Text>
        When using a callback function, you get the following arguments: (
        <Highlight>item</Highlight>: item props from data array,{' '}
        <Highlight>extendProps</Highlight>:{' '}
        <Link href="#extend-props">object</Link> of boolean values (index,
        position, first, last, odd, even) and expected to return an object.
      </Text>
      <Editor scope={scope} code={customItemProps} />
    </Section>

    <Section title="Extend props">
      <Text>
        If you want to render a list of elements but some of the props are
        static values which would be repeated within each item, then using{' '}
        <Highlight>extendProps</Highlight> may come handy. It could be useful
        for example for defining component UI state. When{' '}
        <Highlight>extendProps</Highlight> is set to <Highlight>true</Highlight>
        , the following boolean props will be calculated and passed to each item
        component: <Highlight>index</Highlight>, <Highlight>position</Highlight>
        , <Highlight>odd</Highlight>, <Highlight>even</Highlight>,{' '}
        <Highlight>first</Highlight>, <Highlight>last</Highlight>.
      </Text>
      <Editor scope={scope} code={extendProps} />
    </Section>

    <Section title="Wrapping item">
      <Text>
        If you would like to render a list of items but need to wrap each
        element to another component, then there is no need to create a new
        component where you combine them together. You can just use{' '}
        <Highlight>wrapComponent</Highlight> prop to add a wrapping component.
        For example, this might be useful when you have a list of links but want
        to wrap them to <Highlight>li</Highlight> HTML tag to create a HTML
        valid list of links.
      </Text>
      <Editor scope={scope} code={wrappingItem} />
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
          name="valueName"
          type="string"
          label={
            <>
              Can be used when <Highlight>data</Highlight> consists of{' '}
              <Highlight>strings</Highlight> or <Highlight>numbers</Highlight>{' '}
              to name value being passed as a prop
            </>
          }
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
          type="boolean"
          label={
            <>
              Extend current props for helper boolean props{' '}
              <Highlight>first</Highlight>, <Highlight>last</Highlight>,
              <Highlight>odd</Highlight>, <Highlight>even</Highlight>, and{' '}
              <Highlight>position</Highlight> number in each item
            </>
          }
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
