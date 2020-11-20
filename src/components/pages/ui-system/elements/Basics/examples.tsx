import { Element, List, Text, Overlay, Portal } from '@vitus-labs/elements'

export const scope = { Element, List, Text, Overlay, Portal }

export const element = `
// import { Element } from '@vitus-labs/elements'

const Icon = () => <div>ico</div>
const Loading = () => <div>...</div>

const Button = () => (
  <Element 
    content="Submitting" 
    beforeContent={Icon} 
    afterContent={Loading} 
    gap={32}
    style={{
      padding: 16,
      backgroundColor: 'papayawhip',
      color: 'palevioletred',
      borderRadius: 4,
    }}
  />
)

render(<Button />)
`

export const list = `
// import { Element, List } from '@vitus-labs/elements'

const data = [
  { name: 'John', surname: 'Doe' },
  { name: 'Sam', surname: 'Johnson' },
]

const component = ({ name, surname }) => (
  <Element label={name + ' ' + surname} />
)

const Users = () => (
  <List 
    rootElement 
    vertical 
    data={data} 
    component={component} 
  />
)

render(<Users />)
`

export const text = `
// import { Text } from '@vitus-labs/elements'

const Paragraph = () => (
  <Text 
    paragraph 
    style={{ lineHeight: 1.5 }}
  >
    Hello, I'm a paragraph block element. 
    You can use me for long texts.
  </Text>
)

const Strong = () => (
  <Text 
    tag="strong" 
    style={{ fontWeight: 600 }}
  >
    Strong text
  </Text>
)

render(
  <>
    <Paragraph />
    <Strong />
  </>    
)
`

export const overlay = `
// import { Overlay, Element } from '@vitus-labs/elements'

const Button = (props) => {
  const { active } = props
  
  return (
    <Element
      {...props}
      label="Click on me"
      tag="button" 
      style={{
        background: active 
          ? 
            '#54D6FF' 
          : 
            'rgba(84, 214, 255, 0.4)',
        border: '1px solid #54D6FF',
        padding: '8px 16px',
        color: '#fff',
        borderRadius: 4,
        outline: 'none',
      }}
    />
  )
}

const Content = (props) => (
  <Element 
    style={{
      backgroundColor: '#fff',
      color: '#000',
      padding: 8,
      borderRadius: 8
    }}
    {...props}
  >
    Some content here
  </Element>
)
`

export const portal = `
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
