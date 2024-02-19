import { Router } from "express";
import { prisma } from "../prisma.js";

export const postRouter = Router();

postRouter.get("/", async (req, res) => {
    const posts = await prisma.post.findMany();
    res.send(posts);
  });
  

postRouter.post("/", async (req, res) => {
    const post = await req.body;

    const newPost = await prisma.post.create({
        data: {
        filename: post.filename,
        description: post.description,
        authorId: post.authorId
        },
    });

    res.send(newPost);
});
  