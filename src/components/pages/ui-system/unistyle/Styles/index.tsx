import React from 'react'
import {
  Docs,
  Section,
  Subsection,
  Text,
  Highlight,
  Link,
  Editor,
  Props,
  Prop,
} from '~/components/docs'
import * as s from './styleTypes'
import { prioritization, usage, usageExample, extendCss } from './examples'

const component = () => (
  <Docs title="Styles">
    <Text>
      This is a helper which helps to transform <Highlight>JSON</Highlight>{' '}
      styles into valid <Highlight>CSS properties</Highlight> following the best
      / latest conventions and also automatically{' '}
      <Highlight>transforms</Highlight> value <Highlight>units</Highlight> to
      the most convenient ones.
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

    <Section title="Usage">
      <Text>
        Import the function from <Highlight>@vitus-labs/unistyle</Highlight>{' '}
        package and pass required arguments. The function will return{' '}
        <Link external href="https://styled-components.com/">
          styled-components
        </Link>{' '}
        <Highlight>css</Highlight> function with styles.
      </Text>
      <Editor preview={false} code={usage} />

      <Text>So, for example, let's look at an example below:</Text>
      <Editor preview={false} code={usageExample} />
      <Text>
        This is <Highlight>cool</Highlight>, isn't it? :)
      </Text>
    </Section>

    <Section title="Value priorities">
      <Text>
        As there are cases, that we have an ability to define a value more ways
        (<Highlight>paddingLeft</Highlight>, or{' '}
        <Highlight>paddingRight</Highlight> might be examples), the priorities
        are following in these cases: <Highlight>padding</Highlight> →{' '}
        <Highlight>paddingX</Highlight> →{' '}
        <Highlight>padding(Left/Right)</Highlight>
      </Text>
      <Text>
        In general, the more specific the value is, the higher priority it has.
      </Text>
      <Editor preview={false} code={prioritization} />

      <Subsection title="Paddings & Margins">
        <Text>
          In case of paddings and margins can happen following example:{' '}
          <Highlight>padding</Highlight> → <Highlight>paddingY</Highlight> →{' '}
          <Highlight>paddingBottom</Highlight> where output will be{' '}
          <Highlight>paddingBottom</Highlight> value if more than one is
          defined. The same applies for margins.
        </Text>
      </Subsection>

      <Subsection title="Sizes">
        <Text>
          In case of sizes like width, height, minWidth, minHeight, maxWidth and
          maxHeight can happen following example: <Highlight>minSize</Highlight>{' '}
          → <Highlight>minWidth</Highlight> where output will be{' '}
          <Highlight>minWidth</Highlight> value if more than one is defined. The
          same applies for margins.
        </Text>
      </Subsection>

      <Subsection title="Border radius">
        <Text>
          You can use shorthands for border radius as well. Unfortunately, it's
          pretty tricky to prioritize them clearly as they are not related to
          sides but element corners. Therefore, there is also slightly different
          property naming.
          <Highlight>borderRadiusTop</Highlight> →{' '}
          <Highlight>borderRadiusLeft</Highlight> →{' '}
          <Highlight>borderRadiusTop</Highlight> where output will be{' '}
          <Highlight>borderRadiusTop</Highlight> value if more than one is
          defined. The same applies for others.
        </Text>
        <Text>
          As you can see from text above, higher preference have sides{' '}
          <Highlight>left</Highlight>, <Highlight>right</Highlight> over{' '}
          <Highlight>top</Highlight> and <Highlight>bottom</Highlight>.
        </Text>
      </Subsection>
    </Section>

    <Section title="Extending styles">
      <Text>
        In case you need to use a property which is not supported yet or to
        overwrite some rules, you use <Highlight>extendCss</Highlight> property
        name. You can pass it either as <Highlight>string</Highlight>, or{' '}
        <Highlight>css</Highlight> styled-components (recommended) function with
        your styles.
      </Text>
      <Editor preview={false} code={extendCss} />
    </Section>

    <Section title="Available properties">
      <Text>
        These are props to which can be passed to <Highlight>styles</Highlight>.
        Most of them follow CSS standard values. Some new properties have been
        added for more comfortable development, like{' '}
        <Highlight>margin(X/Y)</Highlight> etc.
      </Text>
      <Props noDefaults>
        <Prop name="hideEmpty" type={s.boolean} label="" />
        <Prop name="clearFix" type={s.boolean} label="" />
        <Prop name="fullScreen" type={s.boolean} label="" />
        <Prop name="resetAll" type={s.resetAll} label="" />
        <Prop name="display" type={s.display} label="" />
        <Prop name="position" type={s.position} label="" />
        <Prop name="boxSizing" type={s.boxSizing} label="" />
        <Prop name="top" type={s.value} label="" />
        <Prop name="bottom" type={s.value} label="" />
        <Prop name="left" type={s.value} label="" />
        <Prop name="right" type={s.value} label="" />
        <Prop
          name="positionX"
          type={s.value}
          label={
            <>
              Combines <Highlight>left</Highlight> and{' '}
              <Highlight>right</Highlight> values
            </>
          }
        />
        <Prop
          name="positionY"
          type={s.value}
          label={
            <>
              Combines <Highlight>top</Highlight> and{' '}
              <Highlight>bottom</Highlight> values
            </>
          }
        />
        <Prop name="width" type={s.value} label="" />
        <Prop name="height" type={s.value} label="" />
        <Prop
          name="size"
          type={s.value}
          label={
            <>
              Combines <Highlight>height</Highlight> and{' '}
              <Highlight>width</Highlight> values (shorthand for square size).
            </>
          }
        />
        <Prop name="minWidth" type={s.value} label="" />
        <Prop name="minHeight" type={s.value} label="" />
        <Prop
          name="minSize"
          type={s.value}
          label={
            <>
              Combines <Highlight>minHeight</Highlight> and{' '}
              <Highlight>minWidth</Highlight> values
            </>
          }
        />
        <Prop name="maxWidth" type={s.value} label="" />
        <Prop name="maxHeight" type={s.value} label="" />
        <Prop
          name="maxSize"
          type={s.value}
          label={
            <>
              Combines <Highlight>maxHeight</Highlight> and{' '}
              <Highlight>maxWidth</Highlight> values
            </>
          }
        />
        <Prop name="margin" type={s.value} label="" />
        <Prop name="marginTop" type={s.value} label="" />
        <Prop name="marginBottom" type={s.value} label="" />
        <Prop name="marginLeft" type={s.value} label="" />
        <Prop name="marginRight" type={s.value} label="" />
        <Prop
          name="marginX"
          type={s.value}
          label={
            <>
              Combines <Highlight>marginLeft</Highlight> and{' '}
              <Highlight>marginRight</Highlight> values
            </>
          }
        />
        <Prop
          name="marginY"
          type={s.value}
          label={
            <>
              Combines <Highlight>marginTop</Highlight> and{' '}
              <Highlight>marginBottom</Highlight> values
            </>
          }
        />
        <Prop name="padding" type={s.value} label="" />
        <Prop name="paddingTop" type={s.value} label="" />
        <Prop name="paddingBottom" type={s.value} label="" />
        <Prop name="paddingLeft" type={s.value} label="" />
        <Prop name="paddingRight" type={s.value} label="" />
        <Prop
          name="paddingX"
          type={s.value}
          label={
            <>
              Combines <Highlight>paddingLeft</Highlight> and{' '}
              <Highlight>paddingRight</Highlight> values
            </>
          }
        />
        <Prop
          name="paddingY"
          type={s.value}
          label={
            <>
              Combines <Highlight>paddingTop</Highlight> and{' '}
              <Highlight>paddingBottom</Highlight> values
            </>
          }
        />
        <Prop name="objectFit" type={s.objectFit} />
        <Prop name="objectPosition" type={s.string} />
        <Prop name="order" type={s.number} />
        <Prop name="resize" type={s.resize} />
        <Prop name="fontFamily" type={s.string} />
        <Prop name="lineHeight" type={s.lineHeight} />
        <Prop name="fontSize" type={s.fontSize} />
        <Prop name="fontStyle" type={s.fontStyle} />
        <Prop name="fontWeight" type={s.fontWeight} />
        <Prop name="textAlign" type={s.textAlign} />
        <Prop name="textTransform" type={s.textTransform} />
        <Prop name="textDecoration" type={s.string} />
        <Prop name="letterSpacing" type={s.letterSpacing} />
        <Prop name="textShadow" type={s.string} />
        <Prop name="textOverflow" type={s.textOverflow} />
        <Prop name="textIndent" type={s.value} />
        <Prop name="whiteSpace" type={s.whiteSpace} />
        <Prop name="wordBreak" type={s.wordBreak} />
        <Prop name="wordWrap" type={s.wordWrap} />
        <Prop name="writingMode" type={s.writingMode} />
        <Prop name="listStyle" type={s.string} />
        <Prop name="listStyleType" type={s.listStyleType} />
        <Prop name="listStyleImage" type={s.listStyleImage} />
        <Prop name="listStylePosition" type={s.string} />
        <Prop name="color" type={s.string} />
        <Prop name="backgroundColor" type={s.backgroundColor} />
        <Prop name="backgroundImg" type={s.backgroundImg} />
        <Prop name="backgroundClip" type={s.backgroundClip} />
        <Prop name="backgroundOrigin" type={s.backgroundOrigin} />
        <Prop name="backgroundPosition" type={s.string} />
        <Prop name="backgroundRepeat" type={s.backgroundRepeat} />
        <Prop name="backgroundSize" type={s.backgroundSize} />
        <Prop name="borderRadius" type={s.string} />
        <Prop name="borderRadiusTopLeft" type={s.value} />
        <Prop
          name="borderRadiusLeft"
          type={s.value}
          label={
            <>
              Combines <Highlight>borderRadiusTopLeft</Highlight> and{' '}
              <Highlight>borderRadiusBottomLeft</Highlight> values
            </>
          }
        />
        <Prop
          name="borderRadiusTop"
          type={s.value}
          label={
            <>
              Combines <Highlight>borderRadiusTopLeft</Highlight> and{' '}
              <Highlight>borderRadiusTopRight</Highlight> values
            </>
          }
        />
        <Prop name="borderRadiusTopRight" type={s.value} label="" />
        <Prop
          name="borderRadiusRight"
          type={s.value}
          label={
            <>
              Combines <Highlight>borderRadiusTopRight</Highlight> and{' '}
              <Highlight>borderRadiusBottomRight</Highlight> values
            </>
          }
        />
        <Prop name="borderRadiusBottomLeft" type={s.value} label="" />
        <Prop
          name="borderRadiusBottom"
          type={s.value}
          label={
            <>
              Combines <Highlight>borderRadiusBottomLeft</Highlight> and{' '}
              <Highlight>borderRadiusBottomRight</Highlight> values
            </>
          }
        />
        <Prop name="borderRadiusBottomRight" type={s.value} label="" />
        <Prop name="border" type={s.string} label="" />
        <Prop name="borderTop" type={s.string} label="" />
        <Prop name="borderBottom" type={s.string} label="" />
        <Prop name="borderLeft" type={s.string} label="" />
        <Prop name="borderRight" type={s.string} label="" />
        <Prop name="borderWidth" type={s.value} label="" />
        <Prop
          name="borderWidthX"
          type={s.value}
          label={
            <>
              Combines <Highlight>borderWidthLeft</Highlight> and{' '}
              <Highlight>borderWidthRight</Highlight> values
            </>
          }
        />
        <Prop
          name="borderWidthY"
          type={s.value}
          label={
            <>
              Combines <Highlight>borderWidthBottom</Highlight> and{' '}
              <Highlight>borderWidthTop</Highlight> values
            </>
          }
        />
        <Prop name="borderWidthTop" type={s.value} label="" />
        <Prop name="borderWidthBottom" type={s.value} label="" />
        <Prop name="borderWidthLeft" type={s.value} label="" />
        <Prop name="borderWidthRight" type={s.value} label="" />
        <Prop name="borderStyle" type={s.borderStyle} label="" />
        <Prop
          name="borderStyleX"
          type={s.borderStyle}
          label={
            <>
              Combines <Highlight>borderStyleLeft</Highlight> and{' '}
              <Highlight>borderStyleRight</Highlight> values
            </>
          }
        />
        <Prop
          name="borderStyleY"
          type={s.borderStyle}
          label={
            <>
              Combines <Highlight>borderStyleBottom</Highlight> and{' '}
              <Highlight>borderStyleTop</Highlight> values
            </>
          }
        />
        <Prop name="borderStyleTop" type={s.borderStyle} label="" />
        <Prop name="borderStyleBottom" type={s.borderStyle} label="" />
        <Prop name="borderStyleLeft" type={s.borderStyle} label="" />
        <Prop name="borderStyleRight" type={s.borderStyle} label="" />
        <Prop name="borderColor" type={s.borderColor} label="" />
        <Prop
          name="borderColorX"
          type={s.borderColor}
          label={
            <>
              Combines <Highlight>borderColorLeft</Highlight> and{' '}
              <Highlight>borderColorRight</Highlight> values
            </>
          }
        />
        <Prop
          name="borderColorY"
          type={s.borderColor}
          label={
            <>
              Combines <Highlight>borderColorBottom</Highlight> and{' '}
              <Highlight>borderColorTop</Highlight> values
            </>
          }
        />
        <Prop name="borderColorTop" type={s.borderColor} label="" />
        <Prop name="borderColorBottom" type={s.borderColor} label="" />
        <Prop name="borderColorLeft" type={s.borderColor} label="" />
        <Prop name="borderColorRight" type={s.borderColor} label="" />
        <Prop name="outline" type={s.string} label="" />
        <Prop name="transition" type={s.string} label="" />
        <Prop name="keyframe" type={s.string} label="" />
        <Prop name="animation" type={s.string} label="" />
        <Prop name="zIndex" type={s.number} label="" />
        <Prop name="boxShadow" type={s.string} label="" />
        <Prop name="transform" type={s.string} label="" />
        <Prop name="opacity" type={s.number} label="" />
        <Prop name="overflow" type={s.overflow} label="" />
        <Prop name="overflowX" type={s.overflow} label="" />
        <Prop name="overflowY" type={s.overflow} label="" />
        <Prop name="overflowWrap" type={s.overflowWrap} label="" />
        <Prop name="visibility" type={s.visibility} label="" />
        <Prop name="cursor" type={s.cursor} label="" />
        <Prop name="userSelect" type={s.userSelect} label="" />
        <Prop name="pointerEvents" type={s.pointerEvents} label="" />
        <Prop name="writingDirection" type={s.writingDirection} label="" />
        <Prop name="extendCss" type={s.extendCss} label="" />
      </Props>
    </Section>
  </Docs>
)

export default component
