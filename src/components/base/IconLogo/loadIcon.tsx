const component = (WrappedComponent) => {
  const Enhanced = ({ name, ...props }) => {
    return (
      <WrappedComponent
        {...props}
        dangerouslySetInnerHTML={
          name
            ? {
                __html: require(`~/assets/images/logo-${name}.svg?include`),
              }
            : undefined
        }
        aria-label={name}
      />
    )
  }

  return Enhanced
}

export default component