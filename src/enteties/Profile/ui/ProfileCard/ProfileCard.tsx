import { Country, CountrySelect } from 'enteties/Country';
import { Currency, CurrencySelect } from 'enteties/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUserName?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    readonly,
  } = props;

  const { t } = useTranslation();
  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };
  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} />
          </div>
        )}

        <Input
          value={data?.first}
          // placeholder={t{'Ваше имя'}}
          className={cls.input}
          onChange={onChangeFirstname}
          readOnly={readonly}
        />
        <Input
          value={data?.lastname}
          // placeholder={t{'Ваша фамилия'}}
          className={cls.input}
          onChange={onChangeLastname}
          readOnly={readonly}
        />
        <Input
          value={data?.age}
          // placeholder={t{'Ваша возраст'}}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          value={data?.city}
          // placeholder={t{'Ваш город'}}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          value={data?.username}
          // placeholder={t{'Имя пользователя'}}
          className={cls.input}
          onChange={onChangeUserName}
          readOnly={readonly}
        />
        <Input
          value={data?.avatar}
          // placeholder={t{'Аватар'}}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
