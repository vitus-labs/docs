/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { ComponentType, FC } from 'react'

type EnhancedType = FC<{ name: string }>
type LoadAsset = (
  WrappedComponent: ComponentType<{ dangerouslySetInnerHTML: any }>
) => EnhancedType

const loadAsset: LoadAsset = (WrappedComponent) => {
  const Enhanced: EnhancedType = ({ name, ...props }) => (
    <WrappedComponent
      {...props}
      dangerouslySetInnerHTML={
        name
          ? {
              __html: require(`~/assets/icons/${name}.svg?include`).default,
            }
          : undefined
      }
      aria-label={name}
    />
  )

  return Enhanced
}

export default loadAsset
