import { useEffect, useState } from "react";

export const Warmup = () => {
  const [data, setData] = useState<String>("");
  const fetchData = async () => {
    const response = await fetch("https://interview-uief.onrender.com/warmup");
    const data = await response.json();
    console.log(data);
    setData(data.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome to warmup</h1>
      <h2>Display the data on the screen</h2>
      <div>{/* data here */}</div>
      <div>{data}</div>
    </>
  );
};
