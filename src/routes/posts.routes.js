import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/posts', async (req, res) => {
  const posts = await prisma.posts.findMany();
  res.json(posts);
});
router.get('/posts/:id', async (req, res) => {
  const postFound = await prisma.posts.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!postFound) return res.status(404).json({ error: 'Post not found' });

  return res.json(postFound);
});

router.post('/posts', async (req, res) => {
  try {
    const newPost = await prisma.posts.create({
      data: req.body,
    });
    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(400).json({
      error: 'Ocurrio un error al insertar el registro',
      target: error.meta.target,
    });
  }
});

export default router;
