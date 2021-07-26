import { ComponentType, VFC } from 'react'

type EnhancedType = VFC<{ name: string; label?: string }>
type LoadAsset = (
  WrappedComponent: ComponentType<{ src: string }>
) => EnhancedType

const loadAsset: LoadAsset = (WrappedComponent) => {
  const Enhanced: EnhancedType = ({ name, label, ...props }) => (
    <WrappedComponent
      src={require(`~/assets/images/logo-${name}.svg`)}
      aria-label={label || name}
      {...props}
    />
  )

  return Enhanced
}

export default loadAsset
