"use client";

import React from "react";
import axios from "axios";

type LinkType = {
  id: number;
  link: string;
  hash: string;
};

function Link() {
  const [link, setLink] = React.useState<string>("");
  const [showLinks, setShowLinks] = React.useState<LinkType[]>([]);

  const get_links = async () => {
    const res = await axios.get("/api/link");
    const data = await res.data;
    console.log("***** get_links");
    setShowLinks(data.msg);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("/api/link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { link: link },
    });

    setLink("");
    await get_links();
  };

  const handleInput = async (inputLink: string) => setLink(inputLink);

  React.useEffect(() => {
    get_links();
  }, []);

  return (
    <div className="py-4 flex flex-col gap-6">
      <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="link"
          id="link"
          onChange={(e) => handleInput(e.target.value)}
          value={link}
          className="text-2xl text-slate-800 px-2 rounded-md"
        />
      </form>

      <div className="bg-slate-100 text-slate-900 px-2 rounded-md">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>URL</th>
              <th>Hash</th>
            </tr>
          </thead>

          <tbody>
            {showLinks.map((link) => (
              <tr key={link.id}>
                <td className="px-4">{link.id}</td>
                <td className="px-4">{link.link}</td>
                <td className="px-4">{link.hash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Link;
