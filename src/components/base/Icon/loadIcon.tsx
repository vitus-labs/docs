// @ts-ignore
const component = (WrappedComponent) => {
  // @ts-ignore
  const Enhanced = ({ name, ...props }) => {
    return (
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
  }

  return Enhanced
}

export default component
