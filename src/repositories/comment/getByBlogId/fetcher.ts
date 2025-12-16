import { USE_MOCK } from '@/constants/mock';
import mockData from './mock.json';

export async function fetcher(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  if (USE_MOCK) {
    return new Response(JSON.stringify(mockData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return fetch(input, init);
}
