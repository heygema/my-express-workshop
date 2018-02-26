//@flow
import type {$Request, $Response} from 'express';
import createDB from '../globals/db';
import type {Product} from '../globals/db';
let db = createDB();

type GetProductResponse = {
  body: Product,
} & $Response;

type GetProductRequest = {
  params: {
    id: string,
  },
} & $Request;

export function getAllProducts(req: $Request, res: $Response) {
  res.status(200).json(db.getState());
}

export function getProduct(req: GetProductRequest, res: GetProductResponse) {
  let {id} = req.params;
  let result = db.getItem(id);
  if (typeof result === 'undefined') {
    res.status(404).json({
      message: 'Product Not Found',
    });
  } else {
    res.status(200).json({
      data: result,
    });
  }
}

export function deleteProduct(req: $Request, res: $Response) {
  let {id} = req.params;
  let target = db.getItem(id);
  if (typeof target === 'undefined') {
    res.status(404).json({
      message: 'Product Not Found',
    });
  } else {
    db.removeItem(id);
    res.status(200).json({
      data: target,
      message: `${target.name} has been deleted`,
    });
  }
}
