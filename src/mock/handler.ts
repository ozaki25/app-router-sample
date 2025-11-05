import { delay, http, HttpHandler, HttpResponse } from 'msw';

export const getTestSuccess = (): HttpHandler => {
  return http.get<never, never, { firstName: string; lastName: string }>('/test', async () => {
    await delay(300);
    return HttpResponse.json(
      {
        firstName: 'Neil',
        lastName: 'Maverick',
      },
      { status: 201 }
    );
  });
};

export const getTestError = (): HttpHandler => {
  return http.get('/test', async () => {
    await delay(300);
    return HttpResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  });
};
