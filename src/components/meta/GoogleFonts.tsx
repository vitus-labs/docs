const FONT =
  'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Varela+Round&display=swap'

const component = () => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link rel="preload" as="style" href={FONT} />
    <link rel="stylesheet" href={FONT} />
    <noscript>
      <link rel="stylesheet" href={FONT} />
    </noscript>
  </>
)

export default component
