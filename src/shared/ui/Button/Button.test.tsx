import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";


describe('Button', () => {
    test('To have in document', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    });

    test('Is button with class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    });
});
