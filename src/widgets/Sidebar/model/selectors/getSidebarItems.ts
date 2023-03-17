import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'enteties/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-20.svg';
import AboutIcon from 'shared/assets/icons/about-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20.svg';
import ArticlesIcon from 'shared/assets/icons/articles-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      text: 'Главная',
      Icon: HomeIcon,
    },
    {
      path: RoutePath.about,
      text: 'О странице',
      Icon: AboutIcon,
    },
  ];
  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticlesIcon,
        authOnly: true,
      },
    );
  }
  return sidebarItemsList;
});
