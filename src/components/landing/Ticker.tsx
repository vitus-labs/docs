const PKGS = [
  'core',
  'styler',
  'attrs',
  'elements',
  'rocketstyle',
  'unistyle',
  'coolgrid',
  'hooks',
  'connector-styler',
  'connector-emotion',
  'connector-styled-components',
  'connector-native',
  'kinetic',
  'kinetic-presets',
  'rocketstories',
]

export function Ticker() {
  const items = PKGS.flatMap((p, i) => [
    <span key={`p-${p}-${i}`} className="pkg">
      @vitus-labs/{p}
    </span>,
    <span key={`s-${p}-${i}`} className="acc">
      ▽
    </span>,
  ])
  return (
    <div className="vl-ticker">
      <div className="vl-ticker-track">
        {items}
        {items}
      </div>
    </div>
  )
}
