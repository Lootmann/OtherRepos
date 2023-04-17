import React from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const sleep = async (sec: number) => {
  await new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

async function fetchUser(): Promise<TUser[]> {
  await sleep(1);
  return await fetch(API_URL).then((res) => res.json());
}

let users: TUser[] | undefined;

export function Child() {
  // Suspense
  if (!users) {
    throw fetchUser().then((res) => {
      users = res;
    });
  }

  return (
    <div className="flex flex-col gap-4 bg-zinc-500 p-2 rounded-md">
      <h2 className="text-2xl text-zinc-950">Child</h2>

      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <div className="border border-zinc-950 text-zinc-950 px-4 py-2 rounded-md">
            <p>
              {user.id}. {user.name} ({user.username})
            </p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
