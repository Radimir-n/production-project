import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SaveScrollPositionSchema } from '../types/saveScrollPositionSchema';

const initialState: SaveScrollPositionSchema = {
  scroll: {},
};

export const saveScrollPositionSlice = createSlice({
  name: 'saveScrollPositionSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: saveScrollPositionActions } = saveScrollPositionSlice;
export const { reducer: saveScrollPositionReducer } = saveScrollPositionSlice;
