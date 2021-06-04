import { useRouter } from 'next/router'

export default (route: string) => {
  const { asPath } = useRouter()

  if (route === asPath) return true

  return false
}
