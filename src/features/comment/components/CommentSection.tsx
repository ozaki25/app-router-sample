'use client';

import { getComments } from '../actions/getComments';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import type { PaginatedComments } from '@/types/comment';
import { useState, useTransition } from 'react';

type Props = {
  blogId: string;
  initialPaginatedComments: PaginatedComments;
};

export function CommentSection({ blogId, initialPaginatedComments }: Props) {
  const [paginatedComments, setPaginatedComments] =
    useState<PaginatedComments>(initialPaginatedComments);
  const [isPending, startTransition] = useTransition();

  const fetchComments = (page: number) => {
    startTransition(async () => {
      const result = await getComments(blogId, page);
      if (result.success) {
        setPaginatedComments(result.data);
      } else {
        alert(result.error);
      }
    });
  };

  const onChangePage = (page: number) => {
    fetchComments(page);
  };

  const onPosted = () => {
    fetchComments(paginatedComments.currentPage);
  };

  return (
    <section className="pt-8 flex flex-col gap-8">
      <h2 className="text-2xl font-bold">コメント</h2>
      <CommentList
        comments={paginatedComments.comments}
        currentPage={paginatedComments.currentPage}
        totalPages={paginatedComments.totalPages}
        isPending={isPending}
        onChangePage={onChangePage}
      />
      <CommentForm blogId={blogId} onPosted={onPosted} />
    </section>
  );
}
