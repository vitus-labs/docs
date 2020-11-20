import { Text, Portal } from '@vitus-labs/elements'

export const scope = { Text, Portal }

export const examples = `
// import { Text, Portal } from '@vitus-labs/elements'

// ↓↓↓ Portal ↓↓↓
render(
  {typeof window && (
    <Portal>
      <Text label="This is a content appended at the end of the DOM." />
    </Portal>
  }
)
`
