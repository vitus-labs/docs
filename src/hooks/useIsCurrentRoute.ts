import { useRouter } from 'next/router'

const useIsCurrentRoute = (route: string) => {
  const { asPath } = useRouter()

  if (route === asPath) return true

  return false
}

export default useIsCurrentRoute
