import { getAllBlog, getBlog, getCommentsByBlogId } from './data';
import { API_BASE_URL } from '@/constants/api';
import { BlogResponse, PaginatedBlogsResponse } from '@/repositories/blog/getAll/responseSchema';
import { PaginatedCommentsResponse } from '@/repositories/comment/getByBlogId/responseSchema';
import { delay, http, HttpHandler, HttpResponse } from 'msw';

export const getAllBlogSuccess = (): HttpHandler => {
  return http.get(
    `${API_BASE_URL}/api/blogs`,
    async ({ request }): Promise<HttpResponse<PaginatedBlogsResponse>> => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get('page')) || 1;
      await delay(300);
      return HttpResponse.json(getAllBlog({ total: 100, currentPage: page }));
    }
  );
};

export const getAllBlogError = (): HttpHandler => {
  return http.get(`${API_BASE_URL}/api/blogs`, async (): Promise<HttpResponse<null>> => {
    await delay(300);
    return HttpResponse.json(null, { status: 500 });
  });
};

export const getBlogSuccess = (): HttpHandler => {
  return http.get<{ id: string }>(
    `${API_BASE_URL}/api/blogs/:id`,
    async ({ params }): Promise<HttpResponse<BlogResponse>> => {
      const { id } = params;
      await delay(300);
      return HttpResponse.json(getBlog(id));
    }
  );
};

export const getBlogNotFound = (): HttpHandler => {
  return http.get<{ id: string }>(
    `${API_BASE_URL}/api/blogs/:id`,
    async (): Promise<HttpResponse<null>> => {
      await delay(300);
      return HttpResponse.json(null, { status: 404 });
    }
  );
};

export const getBlogError = (): HttpHandler => {
  return http.get<{ id: string }>(
    `${API_BASE_URL}/api/blogs/:id`,
    async (): Promise<HttpResponse<null>> => {
      await delay(300);
      return HttpResponse.json(null, { status: 500 });
    }
  );
};

export const createBlogSuccess = (): HttpHandler => {
  return http.post(`${API_BASE_URL}/api/blogs`, async (): Promise<HttpResponse<BlogResponse>> => {
    await delay(300);
    return HttpResponse.json(getBlog('blog-1'), { status: 201 });
  });
};

export const createBlogError = (): HttpHandler => {
  return http.post(`${API_BASE_URL}/api/blogs`, async (): Promise<HttpResponse<null>> => {
    await delay(300);
    return HttpResponse.json(null, { status: 500 });
  });
};

export const updateBlogSuccess = (): HttpHandler => {
  return http.put<{ id: string }>(
    `${API_BASE_URL}/api/blogs/:id`,
    async ({ params }): Promise<HttpResponse<BlogResponse>> => {
      const { id } = params;
      await delay(300);
      return HttpResponse.json(getBlog(id));
    }
  );
};

export const updateBlogError = (): HttpHandler => {
  return http.put<{ id: string }>(
    `${API_BASE_URL}/api/blogs/:id`,
    async (): Promise<HttpResponse<null>> => {
      await delay(300);
      return HttpResponse.json(null, { status: 500 });
    }
  );
};

export const deleteBlogSuccess = (): HttpHandler => {
  return http.delete<{ id: string }>(
    `${API_BASE_URL}/api/blogs/:id`,
    async (): Promise<HttpResponse<null>> => {
      await delay(300);
      return HttpResponse.json(null, { status: 204 });
    }
  );
};

export const deleteBlogError = (): HttpHandler => {
  return http.delete<{ id: string }>(
    `${API_BASE_URL}/api/blogs/:id`,
    async (): Promise<HttpResponse<null>> => {
      await delay(300);
      return HttpResponse.json(null, { status: 500 });
    }
  );
};

export const getCommentsSuccess = (): HttpHandler => {
  return http.get<{ blogId: string }>(
    `${API_BASE_URL}/api/blogs/:blogId/comments`,
    async ({ request, params }): Promise<HttpResponse<PaginatedCommentsResponse>> => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get('page')) || 1;
      const per_page = Number(url.searchParams.get('per_page')) || 4;
      const { blogId } = params;

      await delay(300);
      return HttpResponse.json(
        getCommentsByBlogId({ blogId, total: 20, currentPage: page, perPage: per_page })
      );
    }
  );
};

export const getCommentsError = (): HttpHandler => {
  return http.get<{ blogId: string }>(
    `${API_BASE_URL}/api/blogs/:blogId/comments`,
    async (): Promise<HttpResponse<null>> => {
      await delay(300);
      return HttpResponse.json(null, { status: 500 });
    }
  );
};

export const createCommentSuccess = (): HttpHandler => {
  return http.post<{ blogId: string }>(
    `${API_BASE_URL}/api/blogs/:blogId/comments`,
    async (): Promise<HttpResponse<null>> => {
      await delay(300);
      return HttpResponse.json(null, { status: 201 });
    }
  );
};

export const createCommentError = (): HttpHandler => {
  return http.post<{ blogId: string }>(
    `${API_BASE_URL}/api/blogs/:blogId/comments`,
    async (): Promise<HttpResponse<null>> => {
      await delay(300);
      return HttpResponse.json(null, { status: 500 });
    }
  );
};
