/**
 * Twitter card image — same artwork as the OG card. Twitter's
 * `summary_large_image` is also 1200×630, so we re-export the renderer.
 *
 * Next.js parses route-segment config statically per file, so the
 * declarations have to be inlined here (not re-exported).
 */
import OpenGraphImage from './opengraph-image'

export const dynamic = 'force-static'
export const alt =
  'Vitus Labs — Composable React engine. 15 packages, 4.82 KB CSS-in-JS engine, 170+ CSS props, 123 motion presets.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default OpenGraphImage
