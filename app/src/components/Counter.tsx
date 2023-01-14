import React from "react";
export function Counter() {
  const [count, setCount] = React.useState(0);
  const [isFive, setIsFive] = React.useState(count === 5 ? true : false);
  function decreaseCount() {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  }
  function increaseCount() {
    setCount((prev) => prev + 1);
  }
  React.useEffect(
    () => (count === 5 ? setIsFive(true) : setIsFive(false)),
    [count]
  );
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <h3>Count = 5? : {isFive ? "Yes" : "No"}</h3>
      <button className="btn-plus" onClick={increaseCount}>
        +
      </button>
      <button className="btn-minus" onClick={decreaseCount}>
        -
      </button>
    </div>
  );
}
