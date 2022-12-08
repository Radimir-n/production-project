import React, { InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, type = 'text', autoFocus, readOnly, ...otherProps } = props;
    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current.focus();
        }
    }, [autoFocus]);

    const mods: Mods = {
        [cls.readonly]: readOnly,
    };

    return (
        <div className={classNames(cls.Input, mods, [className])}>
            {/* @ts-ignore */}
            <input ref={ref} type={type} value={value} onChange={onChangeHandler} readOnly={readOnly} {...otherProps} />
        </div>
    );
});
