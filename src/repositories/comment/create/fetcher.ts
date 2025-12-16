import { USE_MOCK } from '@/constants/mock';

export async function fetcher(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  if (USE_MOCK) {
    return new Response(null, {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return fetch(input, init);
}
