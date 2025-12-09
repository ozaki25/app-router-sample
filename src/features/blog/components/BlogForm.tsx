import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

type Props = {
  formAction: (formData: FormData) => void;
  defaultTitle?: string;
  defaultContent?: string;
  submitLabel: string;
  isPending?: boolean;
};

export function BlogForm({
  formAction,
  defaultTitle,
  defaultContent,
  submitLabel,
  isPending,
}: Props) {
  return (
    <Card>
      <CardBody>
        <form action={formAction} className="space-y-4">
          <Input
            name="title"
            label="タイトル"
            placeholder="ブログのタイトルを入力"
            required
            defaultValue={defaultTitle}
          />
          <Textarea
            name="content"
            label="本文"
            placeholder="ブログの本文を入力"
            rows={10}
            required
            defaultValue={defaultContent}
          />
          <div className="flex gap-4">
            <Button type="submit" variant="primary" disabled={isPending}>
              {submitLabel}
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
