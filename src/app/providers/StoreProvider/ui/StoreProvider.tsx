import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
   children?: ReactNode;
   inirialState?:DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, inirialState }: StoreProviderProps) => {
    const store = createReduxStore(inirialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
