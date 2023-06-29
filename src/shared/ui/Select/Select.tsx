import { ChangeEvent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  oprions?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, oprions, value, onChange, readonly } = props;
  const { t } = useTranslation();
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
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
};
