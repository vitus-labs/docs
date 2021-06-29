import { useRouter } from 'next/router'

const isCurrentRoute = (route: string) => {
  const { asPath } = useRouter()

  if (route === asPath) return true

  return false
}

export default isCurrentRoute
