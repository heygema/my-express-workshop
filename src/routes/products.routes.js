import {Router} from 'express';
import {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
} from '../controllers/products.controller';

const productRoutes = Router();

// TODO add controllers later
productRoutes.get('/products', getAllProducts);
productRoutes.post('/products', addProduct);
productRoutes.get('/products/:id', getProduct);
productRoutes.delete('/products/:id', deleteProduct);
productRoutes.put('/products/:id');

export default productRoutes;
