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
              __html: require(`~/assets/icons/${name}.svg?include`),
            }
          : undefined
      }
      aria-label={name}
    />
  )

  return Enhanced
}

export default loadAsset
