import { Router } from 'express';
import { get_products_by_suppliers_request_handler, get_products_request_handler, get_suppliers_request_handler } from '../controllers/route_controller';

const router = Router();

router.get('/products', get_products_request_handler);

router.get('/products/get/supplier/:id', get_products_by_suppliers_request_handler);

export default router;