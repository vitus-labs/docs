import React from 'react'
import {
  Docs,
  Section,
  Subsection,
  Text,
  Highlight,
  Link,
  Editor,
} from '~/components/docs'
import { scope, element, list, text, overlay, portal } from './examples'

const component = () => (
  <Docs title="Basics">
    <Text>
      Elements are a package of patterns which should cover very common and
      frequent use-cases, so you don&apos;t have to repeat yourself again and
      again. Elements are a package of patterns which should cover very common
      and frequent use-cases, so you don&apos;t have to repeat yourself again
      and again.
    </Text>

    <Section title="Motivation">
      <Text>
        The goal is to cover many repeatable use-cases of writing code and make
        banch of components which would solve this. You shouldn&apos;t focus on
        some specifics of CSS or thinking about HTML validation or so. The goal
        is to make configurable components so you can focus on your goals and
        business value.
      </Text>
    </Section>

    <Section title="Installation">
      <Text>
        You can install it with your preferred tool (<Highlight>yarn</Highlight>{' '}
        or <Highlight>npm</Highlight>).
      </Text>

      <Editor
        preview={false}
        code="yarn add @vitus-labs/elements @vitus-labs/core"
      />
    </Section>

    <Section title="Dependencies">
      <Text>
        Elements depends on the following packages which need to be installed as
        well.
      </Text>
    </Section>

    <Section title="Available components">
      <Subsection title="Element">
        <Text>
          Element is a simple component for aligning simple elements
          vertically/horizontally. This might be helpful for adding some
          additional elements like loading icon to button, input element symbol
          or validation element. Which leads to repeatable patterns. All these
          things and much more can be covered by this component.{' '}
          <Link href={(r) => r.uiSystem.elements.element}>See the docs</Link>
        </Text>

        <Editor scope={scope} code={element} />
      </Subsection>

      <Subsection title="List">
        <Text>
          Another usecase is rendering simple lists of data. If you are tired of
          using map function again and again this component is here to cover it
          for you.{' '}
          <Link href={(r) => r.uiSystem.elements.list}>See the docs</Link>
        </Text>

        <Editor scope={scope} code={list} />
      </Subsection>

      <Subsection title="Text">
        <Text>
          Simple component for s or any inline text element like strong, small
          etc. <Link href={(r) => r.uiSystem.elements.text}>See the docs</Link>
        </Text>

        <Editor scope={scope} code={text} />
      </Subsection>

      <Subsection title="Overlay">
        <Text>
          Overlay is a component which might help you building modal windows,
          dropdowns, tooltips, popovers etc. It's quite configurable so you can
          align elements the way you like without any extra effort.{' '}
          <Link href={(r) => r.uiSystem.elements.overlay}>See the docs</Link>
        </Text>
        <Editor scope={scope} code={overlay} />
      </Subsection>

      <Subsection title="Portal">
        <Text>
          Portal is just a common Reat Portal component to be used to append any
          elements to DOM.{' '}
          <Link href={(r) => r.uiSystem.elements.portal}>See the docs</Link>
        </Text>
        <Editor scope={scope} code={portal} />
      </Subsection>
    </Section>
  </Docs>
)

export default component
