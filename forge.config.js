module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    // {
    //   name: '@electron-forge/maker-squirrel',
    //   config: {},
    // },
    // {
    //   name: '@electron-forge/maker-zip',
    //   platforms: ['darwin'],
    // },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          name: 'gpt-electron',
          icon: 'assets/logo.png',
          categories: ['Development', 'Education', 'Utility'],
          maintainer: 'Georgio Barbosa da Fonseca',
          homepage: 'https://github.com/gfonseca/gpt-electron'
        }
      },
    },
    // {
    //   name: '@electron-forge/maker-rpm',
    //   config: {},
    // },
  ],
};
