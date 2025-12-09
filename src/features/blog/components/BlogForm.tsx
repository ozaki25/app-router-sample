'use client';

import { useActionState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import type { Blog } from '@/libs/shared/types';

type BlogFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  blog?: Blog;
  submitLabel: string;
};

const initialState = {
  success: false,
  error: undefined,
};

export function BlogForm({ action, blog, submitLabel }: BlogFormProps) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state?.error) {
      alert(state.error);
    }
  }, [state]);

  return (
    <Card>
      <CardBody>
        <form action={formAction} className="space-y-4">
          <Input
            name="title"
            label="タイトル"
            placeholder="ブログのタイトルを入力"
            required
            defaultValue={blog?.title}
          />
          <Textarea
            name="content"
            label="本文"
            placeholder="ブログの本文を入力"
            rows={10}
            required
            defaultValue={blog?.content}
          />
          <div className="flex gap-4">
            <Button type="submit" variant="primary">
              {submitLabel}
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
