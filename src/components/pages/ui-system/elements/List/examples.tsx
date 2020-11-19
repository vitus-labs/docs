import { Element, List, Text, Overlay, Portal } from '@vitus-labs/elements'

export const scope = { Element, List, Text, Overlay, Portal }

export const examples = `
// import { Element, List } from '@vitus-labs/elements'

const data = [
    { name: 'John', surname: 'Doe' },
    { name: 'Sam', surname: 'Johnson' },
]

const component = ({ name, surname }) => (
    <Element 
        label={name + ' ' + surname} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
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

export const renderChildren = `
// import { Element, List } from '@vitus-labs/elements'

const User = ({ name, surname }) => (
    <Element 
        label={name + ' ' + surname} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
)

const Users = () => (
    <List rootElement vertical>
        <User name="John" surname="Doe" />
        <User name="Sam" surname="Johnson" />
    </List>
)

render(<Users />)
`

export const renderFromArray = `
// import { Element, List } from '@vitus-labs/elements'

const data = [
    { key: '1', name: 'John', surname: 'Doe' },
    { key: '2', name: 'Sam', surname: 'Johnson' },
]

const User = ({ name, surname }) => (
    <Element 
        label={name + ' ' + surname} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
)

const Users = () => (
    <List 
        rootElement 
        vertical 
        data={data} 
        component={User} 
    />
)

render(<Users />)
`

export const renderFromArrayObjects = `
// import { Element, List } from '@vitus-labs/elements'

const data = [
    { key: '1', name: 'John', surname: 'Doe' },
    { key: '2', name: 'Sam', surname: 'Johnson' },
]

const User = ({ name, surname }) => (
    <Element 
        label={name + ' ' + surname} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
)

const Users = () => (
    <List 
        rootElement 
        vertical 
        data={data} 
        component={User} 
    />
)

render(<Users />)
`

export const renderFromArrayStrings = `
// import { Element, List } from '@vitus-labs/elements'

const data = ['John Doe', 'Sam Johnson']

const User = ({ label }) => (
    <Element 
        label={label} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
)

const Users = () => (
    <List 
        rootElement 
        vertical
        // each item will be passed as 'label' prop
        valueName="label"
        data={data} 
        component={User} 
    />
)

render(<Users />)
`

export const itemKeyValueString = `
// import { Element, List } from '@vitus-labs/elements'

const data = [
    { userId: '1', name: 'John', surname: 'Doe' },
    { userId: '2', name: 'Sam', surname: 'Johnson' },
]

const User = ({ name, surname }) => (
    <Element 
        label={name + ' ' + surname} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
)

const Users = () => (
    <List 
        rootElement 
        vertical
        itemKey="userId"
        data={data} 
        component={User} 
    />
)

render(<Users />)
`

export const itemKeyValueFunction = `
// import { Element, List } from '@vitus-labs/elements'

const data = [
    { userId: '1', name: 'John', surname: 'Doe' },
    { userId: '2', name: 'Sam', surname: 'Johnson' },
]

const User = ({ name, surname }) => (
    <Element 
        label={name + ' ' + surname} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
)

const Users = () => (
    <List 
        rootElement 
        vertical
        contentAlignX='block'
        itemKey={(itemProps, i) => itemProps.userId}
        data={data} 
        component={User} 
    />
)

render(<Users />)
`

export const customItemComponent = `
// import { Element, List } from '@vitus-labs/elements'

const User = ({ name, surname }) => (
    <Element 
        label={name + ' ' + surname} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
)

const SpecialUser = ({ name, surname }) => (
    <Element 
        label={name + ' ' + surname + ' - Special user'} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
)

const data = [
    { userId: '1', name: 'John', surname: 'Doe' },
    { userId: '2', name: 'Sam', surname: 'Johnson', component: SpecialUser },
]

const Users = () => (
    <List 
        rootElement 
        vertical
        contentAlignX='block'
        itemKey={(itemProps) => itemProps.userId}
        data={data} 
        component={User} 
    />
)

render(<Users />)
`

export const customItemProps = `
// import { Element, List } from '@vitus-labs/elements'

const data = [
    { name: 'John', surname: 'Doe' },
    { name: 'Sam', surname: 'Johnson' },
]

const User = ({ userId, name, surname }) => (
    <Element 
        label={'[ ' + userId + ' ] - ' + name + ' ' + surname} 
        style={{
            paddingTop: 8,
            paddingBottom: 8
        }}
    />
)

const Users = () => (
    <List 
        rootElement 
        vertical
        contentAlignX='block'
        data={data} 
        component={User} 
        itemProps={(item, extendProps) => ({
            userId: item.position // + '-' + extendProps.position
        })}
    />
)

render(<Users />)
`

export const extendProps = `
// import { Element, List } from '@vitus-labs/elements'

const data = [
    { name: 'John', surname: 'Doe' },
    { name: 'Sam', surname: 'Johnson' },
]

const User = ({ position, name, surname, odd }) => (
    <Element 
        label={'[ ' + position + ' ] - ' + name + ' ' + surname} 
        style={{
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 8,
            paddingBottom: 8,
            color: odd ? 'palevioletred' : 'papayawhip',
            background: odd ? 'papayawhip' : 'palevioletred'
        }}
    />
)

const Users = () => (
    <List 
        rootElement 
        vertical
        contentAlignX='block'
        data={data} 
        component={User} 
        extendProps
    />
)

render(<Users />)
`

export const wrappingItem = `
// import { Element, List } from '@vitus-labs/elements'

const data = [
    { name: 'John', surname: 'Doe' },
    { name: 'Sam', surname: 'Johnson' },
]

const Wrapper = (props) => (
    <Element 
        {...props}
        style={{
            background: '#fff'
        }}
    />
)

const User = ({ name, surname }) => (
    <Element 
        label={name + ' ' + surname} 
        style={{
            paddingTop: 8,
            paddingBottom: 8,
        }}
    />
)

const Users = () => (
    <List 
        rootElement 
        vertical
        contentAlignX='block'
        data={data} 
        component={User} 
        wrapComponent={Wrapper}
    />
)

render(<Users />)
`
