import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getSaveScrollPositionScroll = (state: StateSchema) => state.saveScrollPosition.scroll;

export const getSaveScrollPositionByPath = createSelector(
  getSaveScrollPositionScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
