// @ts-nocheck

const component = (WrappedComponent) => {
  const Enhanced = ({ label, name, ...props }) => (
    <WrappedComponent
      src={require(`~/assets/images/logo-${name}.svg`)}
      aria-label={label || name}
      {...props}
    />
  )

  return Enhanced
}

export default component
