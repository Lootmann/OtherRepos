"use client";

import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

const users: TUser[] = [
  {
    id: 1,
    name: "gervonta",
    description: "My First comment today!",
    isRead: false,
  },
  {
    id: 2,
    name: "davis",
    description: "Great Champion",
    isRead: false,
  },
];

async function getUserList(): Promise<TUser[]> {
  return users;
}

export default function Home() {
  const [users, setUsers] = useState<TUser[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      const u = await getUserList();
      setUsers(u);
    };
    fetchUser();
  }, [isLoading]);

  function onClick() {
    users?.forEach((user) => (user.isRead = true));
    setUsers(users);
    setIsLoading(!isLoading);
  }

  return (
    <main className="w-1/2 mx-auto bg-zinc-800 rounded-md p-2">
      <header className="flex justify-between px-4 mb-10">
        <p>
          <span className="mr-5">Notifications</span>
          <span className="bg-blue-800 px-2 font-bold rounded-md">
            {users?.filter((user) => user.isRead === false).length}
          </span>
        </p>

        <button
          className="text-zinc-500 hover:text-zinc-200
        transition-all duration-200"
          onClick={onClick}
        >
          Mark all as read
        </button>
      </header>

      <div className="flex flex-col px-4 gap-4">
        {users &&
          users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-6 bg-zinc-700 p-2 rounded-md"
            >
              <img
                src={faker.image.avatar()}
                alt="fake face image"
                height={50}
                width={50}
                className="rounded-full"
              />
              <span>{user.name}</span>
              <p>
                {user.description}
                {!user.isRead && <span className="text-red-500">・</span>}
              </p>
            </div>
          ))}
      </div>
    </main>
  );
}
