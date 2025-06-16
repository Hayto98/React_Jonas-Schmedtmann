import React, { use } from "react";

export default function Box() {
  const [data, setData] = React.useState();
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setData(data.slip.advice);
  }

  return (
    <>
      <h1>welcome React</h1>
      <h2>hello world</h2>
      <button onClick={getAdvice}>Get Data</button>
      <p>{data}</p>
    </>
  );
}
