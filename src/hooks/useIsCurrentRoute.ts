import { useRouter } from 'next/router'

const useIsCurrentRoute = (route: string) => {
  const { asPath } = useRouter()

  if (asPath.startsWith(route)) return true

  return false
}

export default useIsCurrentRoute
