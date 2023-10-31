module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx), !reportWebVitals.ts': () => 'yarn tsc --noEmit',

  // Lint & Prettify TS and JS files
  '!reportWebVitals.ts,**/*.(ts|tsx)': (filenames) => [
    `yarn eslint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
}
