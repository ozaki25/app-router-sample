import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-blue-100 transition-colors">
            ブログアプリ
          </Link>
          <div className="flex gap-4">
            <Link href="/blogs" className="px-4 py-2 hover:bg-blue-700 rounded transition-colors">
              ブログ一覧
            </Link>
            <Link
              href="/blogs/new"
              className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-50 transition-colors font-medium"
            >
              新規投稿
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
