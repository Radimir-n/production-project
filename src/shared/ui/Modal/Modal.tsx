import { useTheme } from 'app/providers/ThemeProvider';
import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
   className?: string;
   children?:ReactNode;
   isOpen?:boolean
   onClose?: () => void
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const { theme } = useTheme();
    const handlerOnClose = useCallback(() => {
        onClose();
    }, [onClose]);
    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
    const onKeydown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            handlerOnClose();
        }
    }, [handlerOnClose]);
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeydown);
        }
        return () => {
            window.removeEventListener('keydown', onKeydown);
        };
    }, [isOpen, onKeydown]);
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handlerOnClose}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
