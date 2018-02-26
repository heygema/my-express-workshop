import {Router} from 'express';
import {getAllProducts, getProduct} from '../controllers/product.controllers';

const productRoutes = Router();

// TODO add controllers later
productRoutes.get('/products', getAllProducts);
productRoutes.get('/products/:id', getProduct);
productRoutes.delete('/products/:id');
productRoutes.post('/products');

export default productRoutes;
