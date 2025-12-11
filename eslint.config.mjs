import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import storybook from 'eslint-plugin-storybook';

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  ...storybook.configs['flat/recommended'],
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      '.storybook/public/mockServiceWorker.js',
      'storybook-static/**',
      '**/*mock*/**',
      'coverage/**',
      '!.storybook',
    ],
  },
];

export default eslintConfig;
