import { Text } from '@vitus-labs/elements'

export const scope = { Text }

export const examples = `
// import { Text } from '@vitus-labs/elements'

// ↓↓↓ Text ↓↓↓
render(
  <>
    <Text label="This is a label" />
    <Text>This is a children content</Text>
  </>
)
`

export const renderChildren = `
// import { Text } from '@vitus-labs/elements'

// ↓↓↓ Text ↓↓↓
render(
  <Text>This is a children content</Text>
)
`

export const renderLabel = `
// import { Text } from '@vitus-labs/elements'

// ↓↓↓ Text ↓↓↓
render(
  <Text label="This is a label" />
)
`

export const blockText = `
// import { Text } from '@vitus-labs/elements'

// ↓↓↓ Text ↓↓↓
render(
  <Text paragraph>
    This is a block text which can have as children another{' '}
    <Text tag='strong'>text component</Text>.
  </Text>
)
`
