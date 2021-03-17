import { Element } from '@vitus-labs/elements'

export const scope = { Element }

export const renderChildren = `
// import { Element } from '@vitus-labs/elements'

const BeforeAfter = () => (
  <Element css={beforeAfterStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 40px;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 48px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element
      gap={16}
      content={Content} // used content here
      css={styles}
      beforeContent={BeforeAfter}
      afterContent={BeforeAfter}
    />

    <Element
      gap={16}
      label={Content} // used label here
      css={styles}
      beforeContent={BeforeAfter}
      afterContent={BeforeAfter}
    />

    <Element
      gap={16}
      content={Content}
      css={styles}
      beforeContent={BeforeAfter}
      afterContent={BeforeAfter}
    >
      {/* used children */}
      <Content />
    </Element>
  </>
)
`

export const beforeAfter = `
// import { Element } from '@vitus-labs/elements'

const BeforeAfter = () => (
  <Element css={beforeAfterStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 40px;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 48px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element
      gap={16}
      content={Content}
      css={styles}
      // renders box on the left side
      beforeContent={BeforeAfter}
      // renders box on the right side
      afterContent={BeforeAfter}
    />

    <Element
      gap={16}
      content={Content}
      css={styles}
      // renders box on the left side
      beforeContent={<BeforeAfter />}
      // renders box on the right side
      afterContent={<BeforeAfter />}
    />

    <Element
      gap={16}
      content={Content}
      css={styles}
      // renders box on the left side
      beforeContent={() => <BeforeAfter />}
      // renders box on the right side
      afterContent={() => <BeforeAfter />}
    />
  </>
)
`

export const horizontal = `
// import { Element } from '@vitus-labs/elements'

const BeforeAfter = () => (
  <Element css={beforeAfterStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 40px;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 48px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  // horizontal is by default
  <Element
    gap={16}
    content={Content}
    css={styles}
    beforeContent={BeforeAfter}
    afterContent={BeforeAfter}
  />
)
`

export const vertical = `
// import { Element } from '@vitus-labs/elements'

const BeforeAfter = () => (
  <Element css={beforeAfterStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  height: 40px;
  width: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 320px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-left: 16px;
  margin-right: 16px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element contentDirection="inline">
      <Element
        // add vertical prop
        vertical
        gap={16}
        content={Content}
        css={styles}
        beforeContent={BeforeAfter}
        afterContent={BeforeAfter}
      />

      <Element
        // add direction prop
        direction='rows'
        gap={16}
        content={Content}
        css={styles}
        beforeContent={BeforeAfter}
        afterContent={BeforeAfter}
      />
    </Element>
  </>
)
`

export const horizontalAlignBeforeContentHorizontally = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 40px;
  height: 100%;
\`

const beforeContentStyles = \`
  width: 20px;
  height: 100%;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 20px;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 48px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element
      gap={16}
      content={Content} // used content here
      css={styles}
      beforeContentAlignX='left'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      label={Content} // used label here
      css={styles}
      beforeContentAlignX='center'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      content={Content}
      css={styles}
      beforeContentAlignX='right'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    >
      {/* used children */}
      <Content />
    </Element>
  </>
)
`

export const horizontalAlignContentHorizontally = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeAfterContentStyles} />
)

const After = () => (
  <Element css={beforeAfterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterContentStyles = \`
  width: 40px;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 70%;
  height: 100%;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 48px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element
      gap={16}
      content={Content} // used content here
      css={styles}
      contentAlignX='left'
      beforeContent={Before}
      afterContent={After}
    />

    <Element
      gap={16}
      label={Content} // used label here
      css={styles}
      contentAlignX='center'
      beforeContent={Before}
      afterContent={After}
    />

    <Element
      gap={16}
      content={Content}
      css={styles}
      contentAlignX='right'
      beforeContent={Before}
      afterContent={After}
    >
      {/* used children */}
      <Content />
    </Element>
  </>
)
`

export const horizontalAlignAfterContentHorizontally = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 40px;
  height: 100%;
\`

const beforeContentStyles = \`
  width: 20px;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 20px;
  height: 100%;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 48px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element
      gap={16}
      content={Content} // used content here
      css={styles}
      afterContentAlignX='left'
      beforeContent={Before}
      afterContent={After}
      afterContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      label={Content} // used label here
      css={styles}
      afterContentAlignX='center'
      beforeContent={Before}
      afterContent={After}
      afterContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      content={Content}
      css={styles}
      afterContentAlignX='right'
      beforeContent={Before}
      afterContent={After}
      afterContentCss={beforeAfterStyles}
    >
      {/* used children */}
      <Content />
    </Element>
  </>
)
`

export const horizontalAlignBeforeContentVertically = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  height: 100%;
\`

const beforeContentStyles = \`
  width: 20px;
  height: 20px;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 20px;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 80px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element
      gap={16}
      content={Content} // used content here
      css={styles}
      beforeContentAlignY='top'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      label={Content} // used label here
      css={styles}
      beforeContentAlignY='center'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      content={Content}
      css={styles}
      beforeContentAlignY='bottom'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    >
      {/* used children */}
      <Content />
    </Element>
  </>
)
`

export const horizontalAlignContentVertically = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  height: 100%;
\`

const beforeContentStyles = \`
  width: 20px;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 20px;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 20px;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 80px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element
      gap={16}
      content={Content} // used content here
      css={styles}
      contentAlignY='top'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      label={Content} // used label here
      css={styles}
      contentAlignY='center'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      content={Content}
      css={styles}
      contentAlignY='bottom'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    >
      {/* used children */}
      <Content />
    </Element>
  </>
)
`

export const horizontalAlignAfterContentVertically = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  height: 100%;
\`

const beforeContentStyles = \`
  width: 20px;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 20px;
  height: 20px;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 240px;
  height: 80px;
  padding: 16px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element
      gap={16}
      content={Content} // used content here
      css={styles}
      afterContentAlignY='top'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      label={Content} // used label here
      css={styles}
      afterContentAlignY='center'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    />

    <Element
      gap={16}
      content={Content}
      css={styles}
      afterContentAlignY='bottom'
      beforeContent={Before}
      afterContent={After}
      beforeContentCss={beforeAfterStyles}
    >
      {/* used children */}
      <Content />
    </Element>
  </>
)
`

export const verticalAlignBeforeContentHorizontally = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 100%;
  height: 20px;
\`

const beforeContentStyles = \`
  width: 50%;
  height: 20px;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 50%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 50%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 60px;
  height: 240px;
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
  <Element>
      <Element
        vertical
        gap={16}
        content={Content} // used content here
        css={styles}
        beforeContentAlignX='left'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        label={Content} // used label here
        css={styles}
        beforeContentAlignX='center'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        content={Content}
        css={styles}
        beforeContentAlignX='right'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      >
        {/* used children */}
        <Content />
      </Element>
    </Element>
  </>
)
`

export const verticalAlignContentHorizontally = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 100%;
  height: 20px;
\`

const beforeContentStyles = \`
  width: 50%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 50%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 50%;
  height: 100%;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 60px;
  height: 240px;
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
  <Element>
      <Element
        vertical
        gap={16}
        content={Content} // used content here
        css={styles}
        beforeContentAlignX='center'
        afterContentAlignX='center'
        contentAlignX='left'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        label={Content} // used label here
        css={styles}
        beforeContentAlignX='center'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        content={Content}
        css={styles}
        beforeContentAlignX='center'
        afterContentAlignX='center'
        contentAlignX='right'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      >
        {/* used children */}
        <Content />
      </Element>
    </Element>
  </>
)
`

export const verticalAlignAfterContentHorizontally = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 100%;
  height: 20px;
\`

const beforeContentStyles = \`
  width: 50%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 50%;
  height: 20px;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 50%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 60px;
  height: 240px;
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
  <Element>
      <Element
        vertical
        gap={16}
        content={Content} // used content here
        css={styles}
        beforeContentAlignX='center'
        afterContentAlignX='left'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        label={Content} // used label here
        css={styles}
        beforeContentAlignX='center'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        content={Content}
        css={styles}
        beforeContentAlignX='center'
        afterContentAlignX='right'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      >
        {/* used children */}
        <Content />
      </Element>
    </Element>
  </>
)
`

export const verticalAlignBeforeContentVertically = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 100%;
  height: 60px;
\`

const beforeContentStyles = \`
  width: 100%;
  height: 20px;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 100%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 60px;
  height: 240px;
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element>
      <Element
        vertical
        gap={16}
        content={Content} // used content here
        css={styles}
        beforeContentAlignY='top'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        beforeContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        label={Content} // used label here
        css={styles}
        beforeContentAlignY='center'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        beforeContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        content={Content}
        css={styles}
        beforeContentAlignY='bottom'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        beforeContentCss={beforeAfterStyles}
      >
        {/* used children */}
        <Content />
      </Element>
    </Element>
  </>
)
`

export const verticalAlignContentVertically = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 100%;
  height: 60px;
\`

const beforeContentStyles = \`
  width: 100%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 100%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 20px;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 60px;
  height: 240px;
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element>
      <Element
        vertical
        gap={16}
        content={Content} // used content here
        css={styles}
        contentAlignY='top'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        contentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        label={Content} // used label here
        css={styles}
        contentAlignY='center'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        contentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        content={Content}
        css={styles}
        contentAlignY='bottom'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        contentCss={beforeAfterStyles}
      >
        {/* used children */}
        <Content />
      </Element>
    </Element>
  </>
)
`

export const verticalAlignAfterContentVertically = `
// import { Element } from '@vitus-labs/elements'

const Before = () => (
  <Element css={beforeContentStyles} />
)

const After = () => (
  <Element css={afterContentStyles} />
)

const Content = () => (
  <Element css={contentStyles} />
)

const beforeAfterStyles = \`
  width: 100%;
  height: 60px;
\`

const beforeContentStyles = \`
  width: 100%;
  height: 20px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const afterContentStyles = \`
  width: 100%;
  height: 20px;
  background: #54D6FF;
  border: 1px solid #54D6FF;
\`

const contentStyles = \`
  width: 100%;
  height: 100%;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
\`

const styles = \`
  width: 100%;
  min-width: 60px;
  height: 240px;
  padding: 8px;
  margin-left: 8px;
  margin-right: 8px;
  background: rgba(84, 214, 255, 0.4);
  border: 1px solid #54D6FF;
  margin-bottom: 12px;
\`

// ↓↓↓ Element ↓↓↓
render(
  <>
    <Element>
      <Element
        vertical
        gap={16}
        content={Content} // used content here
        css={styles}
        afterContentAlignY='top'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        label={Content} // used label here
        css={styles}
        afterContentAlignY='center'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      />

      <Element
        vertical
        gap={16}
        content={Content}
        css={styles}
        afterContentAlignY='bottom'
        afterContentAlignX='center'
        contentAlignX='center'
        beforeContent={Before}
        afterContent={After}
        afterContentCss={beforeAfterStyles}
      >
        {/* used children */}
        <Content />
      </Element>
    </Element>
  </>
)
`
