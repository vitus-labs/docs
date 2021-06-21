module.exports = {
  favicon: {
    appName: 'Vitus Labs',
    appShortName: 'Vitus Labs',
    appDescription: 'Build apps like a PRO',
    developerName: 'Vit Bokisch <vit@bokisch.cz>',
    developerURL: 'https://vitus-labs.com',
    path: `/favicon`,
    icons: [
      {
        input: 'src/assets/favicon/light.svg',
        output: 'public/favicon/light',
        path: 'light',
      },
      {
        input: 'src/assets/favicon/dark.svg',
        output: 'public/favicon/dark',
        path: 'dark',
      },
    ],
  },
}
