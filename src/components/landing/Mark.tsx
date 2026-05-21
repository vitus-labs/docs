type MarkVariant = 'solid' | 'outline' | 'minimal'

type Props = {
  size?: number
  color?: string
  accent?: string
  variant?: MarkVariant
  className?: string
}

export function Mark({
  size = 96,
  color = 'currentColor',
  accent = 'var(--vl-accent)',
  variant = 'solid',
  className,
}: Props) {
  if (variant === 'outline') {
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        stroke={color}
        strokeWidth={6}
        strokeLinejoin="miter"
        className={className}
        aria-hidden
      >
        <path d="M8 18 L92 18 L74 44 L26 44 Z" />
        <path d="M26 50 L74 50 L60 72 L40 72 Z" />
        <path d="M40 78 L60 78 L50 94 Z" stroke={accent} />
      </svg>
    )
  }

  if (variant === 'minimal') {
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        stroke={color}
        strokeWidth={14}
        strokeLinecap="square"
        strokeLinejoin="miter"
        className={className}
        aria-hidden
      >
        <path d="M14 22 L50 86 L86 22" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden
    >
      <path d="M8 18 L92 18 L74 44 L26 44 Z" fill={color} />
      <path d="M26 50 L74 50 L60 72 L40 72 Z" fill={color} />
      <path d="M40 78 L60 78 L50 94 Z" fill={accent} />
    </svg>
  )
}

type LockupProps = {
  size?: number
  gap?: number
  variant?: MarkVariant
  className?: string
}

export function Lockup({
  size = 36,
  gap = 14,
  variant = 'solid',
  className,
}: LockupProps) {
  return (
    <span
      className={`vl-lockup ${className ?? ''}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap }}
    >
      <Mark size={size} variant={variant} />
      <span
        className="vl-wordmark"
        style={{ fontSize: Math.round(size * 0.44) }}
      >
        vitus<span className="dot">·</span>labs
      </span>
    </span>
  )
}
