import { fireEvent, render, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslations/renderWithTranslations";
import { SideBar } from "./SideBar";


describe('SideBar', () => {
    test('To have in document', () => {
        renderWithTranslation(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    });

    test('toggle test', () => {
        renderWithTranslation(<SideBar />)
        const btnToggle = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(btnToggle)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    });
});
