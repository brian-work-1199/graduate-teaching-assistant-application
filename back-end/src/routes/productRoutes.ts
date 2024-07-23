import { Router } from 'express';
import db from '../database/db';

const router = Router();

router.get('/products', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products ORDER BY name ASC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/products/supplier/:id', async (req, res) => {
  const supplierId = parseInt(req.params.id);
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE supplierId = ?', [supplierId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;