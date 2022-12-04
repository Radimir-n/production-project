import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const handlerOnClose = useCallback(() => {
        onClose?.();
    }, [onClose]);
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [cls.opened]: isOpen,
    };
    const onKeydown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handlerOnClose();
            }
        },
        [handlerOnClose],
    );
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeydown);
        }
        return () => {
            window.removeEventListener('keydown', onKeydown);
        };
    }, [isOpen, onKeydown]);
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    if (lazy && !isMounted) {
        return null;
    }
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
