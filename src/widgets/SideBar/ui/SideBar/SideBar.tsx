import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from '../../../../shared/ui/Button/Button';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };
    return (
        <div 
        data-testid="sidebar"
        className={classNames(cls.SideBar, { [cls.collapsed]: isCollapsed }, [className])}>
            <Button 
            data-testid="sidebar-toggle"
            type="button" onClick={onToggle}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
