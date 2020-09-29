import React from 'react'
import Layout from '~/components/sections/elements/Layout'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'

export default () => (
  <Layout>
    <Heading level1>Basics</Heading>
    <Text>
      Elements are a package of patterns which should cover very common and
      frequent use-cases, so you don't have to repeat yourself again and
      again.Elements are a package of patterns which should cover very common
      and frequent use-cases, so you don't have to repeat yourself again and
      again.
    </Text>
    <Heading level2>Motivation</Heading>
    <Text>
      The goal is to cover many repeatable use-cases of writing code and make
      banch of components which would solve this. You shouldn't focus on some
      specifics of CSS or thinking about HTML validation or so. The goal is to
      make configurable components so you can focus on your goals and business
      value.
    </Text>
    <Heading level2>Installation</Heading>
    <Text>
      You can install it with your preferred tool (<Text highlight>yarn</Text>{' '}
      or <Text highlight>npm</Text>).
    </Text>
    TODO: editor
    <Heading level2>Dependencies</Heading>
    <Text>
      Elements depends on the following packages which need to be installed as
      well.
    </Text>
    <Heading level2>Components available in the package</Heading>
    <Heading level3>Element</Heading>
  </Layout>
)
