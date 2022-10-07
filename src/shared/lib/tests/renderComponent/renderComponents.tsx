import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTesting';
import { MemoryRouter } from 'react-router-dom';

interface renderComponentOptions {
    route?:string
}

export function renderComponent(component:ReactNode, options:renderComponentOptions = {}) {
    const {
        route = '/',
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,

    );
}
