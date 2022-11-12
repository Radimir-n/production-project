import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { AppDispatch } from 'shared/types/customTypes';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginStateUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginStatePassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginStateIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginStateError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
   className?: string;
}
// Вынесли для того что бы не создавалась новая ссылка объекта в пропсе
const initialReducers :ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch : AppDispatch = useDispatch();

    const username = useSelector(getLoginStateUsername);
    const password = useSelector(getLoginStatePassword);
    const isLoading = useSelector(getLoginStateIsLoading);
    const error = useSelector(getLoginStateError);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Авторизация')} />
                {error && <Text text={t('Ошибка при логине')} theme={TextTheme.ERROR} />}
                <span>{t('Введите логин')}</span>
                <Input autoFocus onChange={onChangeUsername} value={username} />
                <span>{t('Введите пароль')}</span>
                <Input onChange={onChangePassword} value={password} />
                <Button
                    onClick={onLoginClick}
                    theme={ThemeButton.OUTLINE}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default LoginForm;
