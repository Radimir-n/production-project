import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';

export function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', { hovered: true, select: false }, [theme, 'cls'])}>
            <Suspense fallback>
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
