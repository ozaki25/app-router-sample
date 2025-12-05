import { FC } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const basePath = process.env.STORYBOOK_BASE_PATH || '';

const MockImage: FC<Props> = (props) => {
  console.log({ props, basePath });
  const src =
    typeof props.src === 'string' && props.src.startsWith('/') ? basePath + props.src : props.src;
  return <img {...props} src={src} />;
};

export default MockImage;
