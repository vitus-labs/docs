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
    {name: 'John', surname: 'Doe'},
    {name: 'Sam', surname: 'Johnson'},
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
