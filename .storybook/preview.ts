import '../src/app/globals.css';
import {
  createBlogSuccess,
  createCommentSuccess,
  deleteBlogSuccess,
  getAllBlogSuccess,
  getBlogSuccess,
  getCommentsSuccess,
  updateBlogSuccess,
} from '../src/mock/handler';
import type { Preview } from '@storybook/nextjs';
import { initialize, mswLoader } from 'msw-storybook-addon';

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
    msw: {
      handlers: {
        getAllBlog: getAllBlogSuccess(),
        getBlog: getBlogSuccess(),
        createBlog: createBlogSuccess(),
        updateBlog: updateBlogSuccess(),
        deleteBlog: deleteBlogSuccess(),
        getComments: getCommentsSuccess(),
        createComment: createCommentSuccess(),
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  loaders: [mswLoader],
};

export default preview;
