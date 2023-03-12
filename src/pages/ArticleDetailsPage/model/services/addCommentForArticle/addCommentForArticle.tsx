import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetails } from 'enteties/Article/model/selectors/articleDetails';
import { Comment } from 'enteties/Comment';
import { getUserAuthData } from 'enteties/User';
import { addCommentFormActions } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string | undefined, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const { extra, dispatch, getState, rejectWithValue } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetails(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', { articleId: article.id, userId: userData.id, text });

      if (!response.data) {
        throw new Error();
      }

      dispatch(addCommentFormActions.setText(''));
      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
