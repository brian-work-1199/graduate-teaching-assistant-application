import { Router } from 'express';
import db from '../database/db';

const router = Router();

router.get('/suppliers', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM suppliers');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;