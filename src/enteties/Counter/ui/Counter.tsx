import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const decrement = () => {
        dispatch(counterActions.decremented());
    };
    const incrememnt = () => {
        dispatch(counterActions.incremented());
    };
    return (

        <div>
            <h1>{counterValue}</h1>
            {/* <Button onClick={decrement}>decrement</Button>
            <Button onClick={incrememnt}>incrememnt</Button> */}
        </div>
    );
};
