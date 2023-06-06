import { useWindowResize } from '@vitus-labs/hooks'

// eslint-disable-next-line import/prefer-default-export
export const useIsSmallViewport = () => {
  const { width } = useWindowResize()

  return width <= 992
}

export const useIsLargeViewport = () => {
  const isSmall = useIsSmallViewport()

  return !isSmall
}
