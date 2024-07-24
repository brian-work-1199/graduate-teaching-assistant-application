import { RequestHandler } from "express";
import db from "../database/db";

// Generic types:
// 1. T request params
// 2. S response body
// 3. U request body
// 4. V request query params

export const get_products_request_handler: RequestHandler = async (req, res, next) => {
    try {
        const [rows] = await db.query('SELECT * FROM products ORDER BY productName ASC');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

export const get_products_by_suppliers_request_handler: RequestHandler<{id : string}> = async (req, res, next) => {
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
};

export const get_suppliers_request_handler: RequestHandler = async (req, res, next) => {
    try {
        const [rows] = await db.query('SELECT * FROM suppliers');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};