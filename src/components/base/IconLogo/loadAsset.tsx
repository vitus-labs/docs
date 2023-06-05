/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { ComponentType, FC } from 'react'

type EnhancedType = FC<{ name: string; label?: string }>
type LoadAsset = (
  WrappedComponent: ComponentType<{ src: string }>
) => EnhancedType

const loadAsset: LoadAsset = (WrappedComponent) => {
  const Enhanced: EnhancedType = ({ name, label, ...props }) => (
    <WrappedComponent
      src={require(`~/assets/images/logo-${name}.svg?inline`)}
      aria-label={label || name}
      {...props}
    />
  )

  return Enhanced
}

export default loadAsset
