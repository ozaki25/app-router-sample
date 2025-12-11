export type ActionState = {
  success: boolean;
  error?: string;
};

export type ActionResponse<T = void> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
