import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
   className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <span>{t('Введите логин')}</span>
            <Input autoFocus />
            <span>{t('Введите пароль')}</span>
            <Input />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
