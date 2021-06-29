// @ts-ignore
const component = (WrappedComponent) => {
  // @ts-ignore
  const Enhanced = ({ name, ...props }) => {
    const icon = name ? require(`~/assets/images/logo-${name}.svg`) : ''

    return (
      <WrappedComponent
        {...props}
        src={icon}
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
