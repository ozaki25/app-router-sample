import MockImage from './MockImage';
import * as NextImage from 'next/image';

try {
  console.log('Mocking next/image with Storybook MockImage component');
  Object.defineProperty(NextImage, 'default', {
    configurable: true,
    value: MockImage,
  });
} catch (error) {
  console.error('Failed to mock next/image with Storybook MockImage component', error);
}
