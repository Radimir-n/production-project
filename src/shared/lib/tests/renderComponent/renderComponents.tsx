import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTesting';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

interface renderComponentOptions {
    route?:string
    inirialState?: DeepPartial<StateSchema>
}

export function renderComponent(component:ReactNode, options:renderComponentOptions = {}) {
    const {
        route = '/',
        inirialState,
    } = options;
    return render(
        <StoreProvider initialState={inirialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,

    );
}
