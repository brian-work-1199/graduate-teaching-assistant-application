import { Router } from 'express';
import { get_suppliers_request_handler } from '../controllers/route_controller';

const router = Router();

router.get('/suppliers', get_suppliers_request_handler);

export default router;