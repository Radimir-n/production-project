import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginStatePassword = (state: StateSchema) => state?.loginForm?.password || '';
