// @ts-ignore
const component = (WrappedComponent) => {
  // @ts-ignore
  const Enhanced = ({ name, ...props }) => {
    return (
      <WrappedComponent
        {...props}
        src={require(`~/assets/images/logo-${name}.svg`)}
        // dangerouslySetInnerHTML={
        //   name
        //     ? {
        //         __html: require(`~/assets/images/logo-${name}.svg`),
        //       }
        //     : undefined
        // }
        aria-label={name}
      />
    )
  }

  return Enhanced
}

export default component
