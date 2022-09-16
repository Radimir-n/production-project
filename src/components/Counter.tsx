import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={classes.btn}>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
};
