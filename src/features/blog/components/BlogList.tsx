import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import { formatDate } from '@/libs/shared/date';
import { Blog } from '@/types/blog';
import Link from 'next/link';

type Props = {
  blogs: Blog[];
};

export function BlogList({ blogs }: Props) {
  if (blogs.length === 0) {
    return (
      <Card>
        <CardBody>
          <p className="text-gray-500 text-center py-8">ブログ記事がありません</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Card key={blog.id}>
          <CardHeader>
            <h2 className="text-xl font-bold text-gray-900 line-clamp-2">{blog.title}</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600 line-clamp-3 mb-4">{blog.content}</p>
            <p className="text-sm text-gray-500">{formatDate(blog.createdAt)}</p>
          </CardBody>
          <CardFooter>
            <Link
              href={`/blogs/${blog.id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              続きを読む
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
