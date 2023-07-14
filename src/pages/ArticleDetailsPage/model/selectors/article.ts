import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetails } from 'enteties/Article';
import { getUserAuthData } from 'enteties/User';

export const getCanEditArticle = createSelector(
  getArticleDetails,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.user.id === user.id;
  },
);
