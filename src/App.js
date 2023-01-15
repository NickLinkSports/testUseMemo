import React, { useMemo, useState } from "react";

function App() {
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const result01 = () => setCount01(count01 + 1);
  const result02 = () => setCount02(count02 + 1);

  // const square = () => {
  //   let i = 0;
  //   while (i < 1500000000) i++;
  //   return count02 * count02;
  // };

  const square = useMemo(() => {
    let i = 0;
    while (i < 1500000000) i++;
    return count02 * count02;
  }, [count02]);

  return (
    <>
      <div>result01: {count01}</div>
      <div>result02: {count02}</div>

      {/* useMemoを使用しない場合 再計算が必要ないのにcount01増加が重たい*/}
      {/* <div>square: {square()}</div> */}

      {/* useMemoを使用する場合 count01増加の処理は軽い*/}
      <div>square: {square}</div>

      <button onClick={result01}>increment</button>
      <button onClick={result02}>increment</button>
    </>
  );
}

export default App;
