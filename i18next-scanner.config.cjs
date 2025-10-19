module.exports = {
  input: ['src/**/*.{ts,tsx}'], // files to scan
  output: './',
  options: {
    debug: true,
    removeUnusedKeys: true,
    sort: true,
    func: {
      list: ['t'], // function names to scan
      extensions: ['.ts', '.tsx']
    },
    lngs: ['en', 'fr'], // languages
    ns: ['translation'], // namespace
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue: (lng, _ns, key) => {
      if (lng === 'en') {
        return key; // Use the key as the default value for English
      }
      return ''; // Empty string for other languages
    },
    resource: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
      savePath: './public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
    },
    keySeparator: false, // if your keys are full sentences
    nsSeparator: false,
  }
};
