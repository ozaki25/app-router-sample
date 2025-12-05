import { initialize, mswLoader } from 'msw-storybook-addon';
import type { Preview } from '@storybook/nextjs';
import '../src/app/globals.css';

initialize({
  serviceWorker: {
    url: './mockServiceWorker.js',
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
