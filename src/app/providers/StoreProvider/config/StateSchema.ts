import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'enteties/Article';
import { ProfileSchema } from 'enteties/Profile';

import { UserSchema } from 'enteties/User';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { SaveScrollPositionSchema } from 'features/SaveScrollPosition';
import {
  ArticleDetailsPageSchema,
} from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlePage/model/types/articlesPageSchema';

export interface StateSchema {
  user: UserSchema;
  saveScrollPosition: SaveScrollPositionSchema

  // Async
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?:AddCommentFormSchema;
  articlesPage?:ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema

}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // Проверка на вмонитрованость редюсера(true - вмонитрован, false - демонтирован)
  getMountedReducers: () => MountedReducers
}
export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
