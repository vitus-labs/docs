import { Element, Overlay } from '@vitus-labs/elements'

export const scope = { Element, Overlay }

export const examples = `
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

// ↓↓↓ Overlay ↓↓↓
render(
  <Overlay 
    trigger={Button} 
    refName="innerRef"
    offsetY={8}
  >
    <Content />
  </Overlay>
)
`

export const dropdown = `
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
    contentDirection="rows"
    style={{
      backgroundColor: '#fff',
      color: '#000',
      padding: 8,
      borderRadius: 8
    }}
    {...props}
  />
)

const Item = ({ label }) => (
  <Element 
    label={label} 
    style={{
      width: 200,
      height: 40,
      borderBottom: '1px solid rgba(84, 214, 255, 0.4)'
    }}
  />
)

// ↓↓↓ Overlay ↓↓↓
render(
  <Overlay 
    trigger={Button} 
    refName="innerRef"
    offsetY={8}
  >
    <Content>
      <Item label="Item A" />
      <Item label="Item B" />
      <Item label="Item C" />
      <Item label="Item D" />
    </Content>
  </Overlay>
)
`

export const tooltip = `
// import { Overlay, Element } from '@vitus-labs/elements'

const Button = (props) => (
  <Element
    {...props}
    label="Hover on me"
    tag="button" 
    style={{
      background: 'rgba(84, 214, 255, 0.4)',
      border: '1px solid #54D6FF',
      padding: '8px 16px',
      color: '#fff',
      borderRadius: 4,
      outline: 'none',
    }}
  />
)

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

// ↓↓↓ Overlay ↓↓↓
render(
  <Overlay 
    trigger={Button} 
    refName="innerRef"
    openOn="hover"
    closeOn="hover"
    align="top"
    alignX="center"
    offsetY={8}
  >
    <Content />
  </Overlay>
)
`
