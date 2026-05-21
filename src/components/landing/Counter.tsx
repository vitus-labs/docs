type Props = {
  target: number
  suffix?: string
}

/**
 * Static counter — renders the final value directly. Previously this ran a
 * roll-up animation, but it was timing-fragile in headless environments and
 * occasionally captured visitors mid-animation showing the wrong number,
 * which is objectively worse for a stats panel.
 */
export function Counter({ target, suffix = '' }: Props) {
  return (
    <span>
      {target}
      {suffix}
    </span>
  )
}
