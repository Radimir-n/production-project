import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    user:UserSchema

    // Async
    loginForm?:LoginSchema
}

export type StateSchemaKey = keyof StateSchema
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>
    add: (key:StateSchemaKey, reducer:Reducer) => void
    remove: (key:StateSchemaKey) => void
}
export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
