import { Header } from '@/components/layout/Header';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/LinkButton';
import { PageHeader } from '@/components/ui/PageHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="4xl">
        <PageHeader
          title="ブログアプリへようこそ"
          description="Next.js App Routerで構築したシンプルなブログアプリケーションです"
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">機能紹介</h2>
            </CardHeader>
            <CardBody>
              <ul className="space-y-2 text-gray-700">
                <li>✅ ブログ記事の一覧表示</li>
                <li>✅ ブログ記事の詳細表示</li>
                <li>✅ ブログ記事の投稿</li>
                <li>✅ ブログ記事の編集</li>
                <li>✅ ブログ記事の削除</li>
                <li>✅ Bootstrap風のUIデザイン</li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">技術スタック</h2>
            </CardHeader>
            <CardBody>
              <ul className="space-y-2 text-gray-700">
                <li>🚀 Next.js 16 (App Router)</li>
                <li>⚛️ React 19</li>
                <li>🎨 Tailwind CSS</li>
                <li>✨ TypeScript</li>
                <li>🔄 Server Actions</li>
                <li>✅ Zod (バリデーション)</li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <div className="text-center">
          <LinkButton href="/blogs" variant="primary" size="lg">
            ブログ一覧を見る
          </LinkButton>
        </div>

        <div className="flex justify-end items-centermt-8 mt-8">
          <div className="flex gap-4 p-2 bg-[#81878d]">
            <Image src="/next.png" alt="Next.js PNG" height={24} width={120} className="block" />
            <Image src="/next.svg" alt="Next.js SVG" height={24} width={120} className="block" />
          </div>
        </div>
      </Container>
    </>
  );
}
