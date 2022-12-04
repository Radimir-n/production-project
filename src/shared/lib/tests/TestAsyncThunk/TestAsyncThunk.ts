import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue extends ThunkConfig<string>> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, RejectedValue>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
export class TestAsyncThunk<Return, Arg, RejectedValue extends ThunkConfig<string>> {
    dispatch: jest.Mocked<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.Mocked<any>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        // @ts-ignore
        const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });
        return result;
    }
}
