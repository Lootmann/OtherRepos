import { useEffect, useRef, useState } from "react";

const useCountdown = (onDone: () => void, initTimeInSeconds: number) => {
  const [, render] = useState(0);
  const timeLeftRef = useRef(initTimeInSeconds);
  const intervalRef = useRef();

  const start = () => {
    intervalRef.current = setInterval(() => {
      const newPrevTime = timeLeftRef.current - 1;

      if (newPrevTime <= 0) {
        onDone();
        clearInterval(intervalRef.current);
        timeLeftRef.current = 0;
      } else {
        timeLeftRef.current -= 1;
      }
      render(Symbol());
    }, 1000);
    render();
  };

  useEffect(() => {
    start();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return {
    secondsLeft: timeLeftRef.current,
    reset: () => {
      timeLeftRef.current = initTimeInSeconds;
      start();
    },
  };
};

function App() {
  const { secondsLeft, reset } = useCountdown(() => {
    console.log("down");
  }, 5);

  return (
    <div className="App">
      <h1>Vite + React</h1>

      <div>
        <p>{secondsLeft}</p>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default App;
