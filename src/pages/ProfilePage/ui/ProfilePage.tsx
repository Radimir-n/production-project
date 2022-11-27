import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../model/slice/profileSlice';

const reducers:ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    return (

        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
