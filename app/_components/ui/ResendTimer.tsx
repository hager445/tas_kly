import React, { useEffect, useState } from "react";

export default function ResendTimer({ targetTime }: { targetTime: number }) {
  const timeInMs = targetTime * 60 * 1000;
  console.log(timeInMs);

  const [mins, setMins] = useState(targetTime - 1);
  const [secs, setSecs] = useState(59);
  //   useEffect(() => {
  //     const ID = setInterval(() => {
  //       console.log("int");

  //       //   setSecs((sec) => --sec);
  //       //   if (secs === 0) {
  //       //     setMins((min) => --min);
  //       //   }
  //     }, timeInMs);
  //     // return clearInterval(ID);
  //   }, []);
  useEffect(() => {
    let x = 59;
    let y = 4;
    const ID = setInterval(() => {
      //   console.log("int");

      //   setSecs((sec) => sec - 1);
      //   if (secs === 0) {
      //     setMins((min) => min - 1);
      //   }
      x--;
      if (x === 0) {
        y = y - 1;
      }
      console.log(x, y);
    }, timeInMs);

    return () => clearInterval(ID);
  }, []);
  return (
    <div>
      {mins} : {secs}
    </div>
  );
}
