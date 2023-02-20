import React from "react";

type JokeProps = {
  joke: {
    id: string;
    type: string;
    setup: string;
    punchline: string;
  };
};

export function Joke({ joke }: JokeProps) {
  return (
    <div>
      <header>
        {joke.id}. {joke.type}
      </header>

      <div>
        <p>SETUP &lt; {joke.setup}</p>
        <p>PUNCHLINE &lt; {joke.punchline}</p>
      </div>
    </div>
  );
}
