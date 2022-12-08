import { ChangeEvent, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  oprions?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const { className, label, oprions, value, onChange, readonly } = props;
    const { t } = useTranslation();
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const oprionsList = useMemo(
        () => oprions?.map((opt) => (
            <option key={opt.value} className={cls.option} value={opt.value}>
                {opt.content}
            </option>
        )),
        [oprions],
    );

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select className={cls.select} onChange={onChangeHandler} value={value} disabled={readonly}>
                {oprionsList}
            </select>
        </div>
    );
});
