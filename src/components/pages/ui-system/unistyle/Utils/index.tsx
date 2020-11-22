import React from 'react'
import { Docs, Section, Text, Highlight, Editor } from '~/components/docs'
import { breakpoints, alignContent, extendCss } from './examples'

const component = () => (
  <Docs title="Utils">
    <Text>
      This section contains set of useful utility functions which may come handy
      (and are being used internally in other @vitus-labs/* packages as well).
    </Text>

    <Section title="Breakpoints">
      <Text>
        When you import <Highlight>breakpoints</Highlight>, you just get a
        default set of defined breakpoints as a JSON object so you can pass it
        to <Highlight>ThemeProvider</Highlight> fo example.
      </Text>
      <Editor preview={false} code={breakpoints} />
    </Section>

    <Section title="Align content">
      <Text>
        There are differences between using <Highlight>flex</Highlight> align
        properties on web and React Native, therefore aim of this function is to
        synchronize naming and generate expected css styles.
      </Text>
      <Editor preview={false} code={alignContent} />
    </Section>

    <Section title="Extended Css">
      <Text>
        This might be usefull when you would like to use{' '}
        <Highlight>css</Highlight> from styled-components as a param in a
        callback.
      </Text>
      <Editor preview={false} code={extendCss} />
    </Section>
  </Docs>
)

export default component
