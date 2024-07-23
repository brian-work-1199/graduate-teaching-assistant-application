import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import supplierRoutes from './routes/supplierRoutes';

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', productRoutes);
app.use('/api', supplierRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});