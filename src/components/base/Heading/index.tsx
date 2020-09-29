import text from '../Text'

export default text
  .theme((t) => ({
    fontWeight: 600,
  }))
  .sizes((t) => ({
    level1: {
      fontSize: 42,
      marginBottom: 8,
    },
    level2: {
      fontSize: 32,
      marginBottom: 4,
    },
    level3: {
      fontSize: 26,
      fontWeight: 700,
    },
  }))
