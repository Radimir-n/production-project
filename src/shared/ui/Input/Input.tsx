import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLButtonElement>, 'value'| 'onChange'>

interface InputProps extends HTMLInputProps{
   className?: string;
   value?:string;
   onChange?:(value:string) => void
   autoFocus?:boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autoFocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement | null>(null);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
