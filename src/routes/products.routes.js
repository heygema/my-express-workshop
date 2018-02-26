import {Router} from 'express';
import {
  getAllProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from '../controllers/products.controller';

const productRoutes = Router();

productRoutes.get('/products', getAllProducts);
productRoutes.post('/products', addProduct);
productRoutes.get('/products/:id', getProduct);
productRoutes.delete('/products/:id', deleteProduct);
productRoutes.put('/products/:id', editProduct);

export default productRoutes;
