import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('increment test', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.incremented())).toEqual({ value: 11 });
    });
    test('decrement test', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decremented())).toEqual({ value: 9 });
    });

    test('with empty state', () => {
        expect(counterReducer(undefined, counterActions.incremented())).toEqual({ value: 1 });
    });
});
