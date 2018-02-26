//@flow
import type {$Request, $Response} from 'express';
import createDB from '../globals/db';
import type {Product} from '../globals/db';
let db = createDB();
import uniqid from 'uniqid';

type GetProductResponse = {
  body: Product,
} & $Response;

type GetProductRequest = {
  params: {
    id: string,
  },
} & $Request;

type AddProductRequest = {
  body: {
    name: string,
    price: number,
  },
} & $Request;

export function getAllProducts(req: $Request, res: $Response) {
  let data = db.getState();
  let resultData = {};
  for (let d of data) {
    resultData[d.id] = {
      name: d.name,
      price: d.price,
      photo: d.photo,
    };
  }
  if (typeof data !== 'undefined') {
    res.status(200).json(resultData);
  } else {
    res.status(404).json({
      message: 'OOPS ! no data found',
    });
  }
}

export function addProduct(req: AddProductRequest, res: $Response) {
  let {name, price} = req.body;
  if (name && price && req.body) {
    let genID = uniqid();
    db.addItem({
      id: genID,
      name,
      price,
      photo: '/',
    });
    res.status(200).json(db.getItem(genID));
  } else {
    res.status(400).json({
      message: "request isn't complete",
    });
  }
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
