import { Router } from 'express';
import db from '../database/db';

const router = Router();

router.get('/products', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products ORDER BY productName ASC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/products/get/supplier/:id', async (req, res) => {
  const supplierId = parseInt(req.params.id);
  try {
    const [rows] = await db.query(`
    SELECT  p.productId, p.productName, p.unitPrice, p.quantityInStock, p.dateSupplied, 
            s.supplierName, s.contactPhone 
    FROM products p 
    JOIN suppliers s 
    ON p.supplierId = s.supplierId 
    WHERE s.supplierId = ?`
    , [supplierId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;