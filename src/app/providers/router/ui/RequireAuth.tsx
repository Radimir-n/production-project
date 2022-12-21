import { getUserAuthData } from 'enteties/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequiteAuth = ({ children }:{children:JSX.Element}) => {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();
    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
