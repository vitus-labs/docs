import { useOverlay, Portal } from '@vitus-labs/elements'

const Component = () => {
  const ctx = useOverlay()

  return (
    <>
      <div ref={ctx.triggerRef as any}>menu</div>
      {ctx.active && (
        <Portal>
          <div ref={ctx.contentRef as any}>hello world</div>
        </Portal>
      )}
    </>
  )
}

export default Component
