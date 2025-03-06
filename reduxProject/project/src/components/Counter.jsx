import React, { useState } from 'react';
import { Link } from 'wouter';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import { Plus, Minus } from 'lucide-react';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const [stateCount, setStateCount] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setStateCount(stateCount + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setStateCount(stateCount - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>Redux Counter Example</h1>
        <div className="count">Redux Count :- {count}</div>
        <div className="count">State Count :- {stateCount}</div>
        <div className="buttons">
          <button className="increment" onClick={() => handleIncrement()}>
            <Plus size={18} /> Increment
          </button>
          <button className="decrement" onClick={() => handleDecrement()}>
            <Minus size={18} /> Decrement
          </button>
        </div>
      </div>
      <br />
      <Link href="/">Go back to the Home Page</Link>
    </div>
  );
};

export default Counter;
