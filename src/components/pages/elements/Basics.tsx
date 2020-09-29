import React from 'react'
import Layout from '~/components/sections/elements/Layout'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import Link from '~/components/base/Link'

export default () => (
  <Layout>
    <Heading level1>Basics</Heading>
    <Text paragraph>
      Elements are a package of patterns which should cover very common and
      frequent use-cases, so you don't have to repeat yourself again and
      again.Elements are a package of patterns which should cover very common
      and frequent use-cases, so you don't have to repeat yourself again and
      again.
    </Text>
    <Heading level2>Motivation</Heading>
    <Text paragraph>
      The goal is to cover many repeatable use-cases of writing code and make
      banch of components which would solve this. You shouldn't focus on some
      specifics of CSS or thinking about HTML validation or so. The goal is to
      make configurable components so you can focus on your goals and business
      value.
    </Text>
    <Heading level2>Installation</Heading>
    <Text paragraph>
      You can install it with your preferred tool (<Text highlight>yarn</Text>{' '}
      or <Text highlight>npm</Text>).
    </Text>
    TODO: editor
    <Heading level2>Dependencies</Heading>
    <Text paragraph>
      Elements depends on the following packages which need to be installed as
      well.
    </Text>
    <Heading level2>Components available in the package</Heading>
    <Heading level3>Element</Heading>
    <Text paragraph>
      Element is a simple component for aligning simple elements
      vertically/horizontally. This might be helpful for adding some additional
      elements like loading icon to button, input element symbol or validation
      element. Which leads to repeatable patterns. All these things and much
      more can be covered by this component.{' '}
      <Link href="/docs/elements/element">See the docs</Link>
    </Text>
    <Heading level3>List</Heading>
    <Text paragraph>
      Another usecase is rendering simple lists of data. If you are tired of
      using map function again and again this component is here to cover it for
      you. <Link href="/docs/elements/list">See the docs</Link>
    </Text>
    <Heading level3>Text</Heading>
    <Text paragraph>
      Simple component for paragraphs or any inline text element like strong,
      small etc. <Link href="/docs/elements/text">See the docs</Link>
    </Text>
    <Heading level3>Overlay</Heading>
    <Text paragraph>
      Overlay is a component which might help you building modal windows,
      dropdowns, tooltips, popovers etc. It's quite configurable so you can
      align elements the way you like without any extra effort.{' '}
      <Link href="/docs/elements/overlay">See the docs</Link>
    </Text>
    <Heading level3>Portal</Heading>
    <Text paragraph>
      Portal is just a common Reat Portal component to be used to append any
      elements to DOM. <Link href="/docs/elements/portal">See the docs</Link>
    </Text>
  </Layout>
)
