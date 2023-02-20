import React from "react";
import "../styles/App.css";
import { Joke } from "./Joke";

type JokeType = {
  id: string;
  type: string;
  setup: string;
  punchline: string;
};

const jokeUrl =
  "https://official-joke-api.appspot.com/jokes/programming/random";

function App() {
  const [joke, setJoke] = React.useState<JokeType>({
    id: "1",
    type: "Getting Started",
    setup: "How I get some jokes?",
    punchline: "It's on you!",
  });

  function fetchJoke() {
    fetch(jokeUrl)
      .then((response) => response.json())
      .then((data) => {
        let fetchJoke: JokeType = {
          id: data[0].id,
          type: data[0].type,
          setup: data[0].setup,
          punchline: data[0].punchline,
        };
        setJoke(fetchJoke);
      });
  }

  React.useEffect(() => {
    fetchJoke();
  }, []);

  function handleClick() {
    fetchJoke();
  }

  return (
    <div className="App" id="app">
      <header id="header">
        <button className="button" onClick={handleClick}>
          Jokes On You
        </button>
      </header>

      <main id="main">
        <Joke joke={joke} />
      </main>
    </div>
  );
}

export default App;
