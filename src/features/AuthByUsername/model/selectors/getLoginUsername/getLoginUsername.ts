import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginStateUsername = (state: StateSchema) => state?.loginForm?.username || '';
