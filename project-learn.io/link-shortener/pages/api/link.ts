import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      const links = await prisma.link.findMany();
      res.status(200).json({ msg: links });
      break;
    }

    case "POST": {
      // validation req.body
      const link: string = req.body.body.link;

      if (link == null) {
        res.status(200).json({ msg: `No URL.` });
        break;
      }

      const found = await prisma.link.findFirst({
        where: { link: link },
      });

      // link is NOT unique
      if (found != null) {
        res.status(200).json({
          msg: `this link ${link} is already shorterned. ${found.hash}`,
        });
        break;
      }

      const prisma_response = await prisma.link.create({
        data: { link: link, hash: nanoid(10) },
      });

      res.status(200).json({ msg: `Create Link: ${prisma_response}` });
      break;
    }

    default: {
      res.status(405).json({ msg: "WRONG METHOD" });
      break;
    }
  }
};

export default handler;
