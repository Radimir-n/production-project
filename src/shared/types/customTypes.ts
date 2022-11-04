import { createReduxStore } from 'app/providers/StoreProvider';

const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
