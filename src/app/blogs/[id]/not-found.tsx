import { Header } from '@/components/layout/Header';
import { Card, CardBody } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/LinkButton';

export default function NotFound() {
  return (
    <>
      <Header />
      <Container maxWidth="2xl">
        <Card>
          <CardBody>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">404 - ブログが見つかりません</h1>
            <p className="text-gray-600 mb-6">
              お探しのブログ記事は見つかりませんでした。削除されたか、URLが間違っている可能性があります。
            </p>
            <LinkButton href="/blogs" variant="primary">
              ブログ一覧に戻る
            </LinkButton>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
