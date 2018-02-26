// @flow

export type Products = Array<Product>;

export type Product = {
  id: string,
  name: string,
  price: number,
  photo: string,
};

let products: Products = [
  {id: '1', name: 'banana', price: 2000, photo: '...'},
  {id: '2', name: 'apple', price: 5000, photo: '...'},
  {id: '3', name: 'microsoft', price: 1200000, photo: '...'},
];

function createDB() {
  let state = products;
  function setState(newState) {
    state = newState;
  }
  return {
    getState: () => state,
    getItem: (id: string) => {
      let result;
      console.log(result);
      for (let item of state) {
        if (item.id === id) {
          result = item;
        }
      }
      return result;
    },
    addItem: (item: Product) => {
      setState([...state, item]);
    },
    removeItem: (id: string) => {
      let newState = state.filter((i) => i.id !== id);
      setState(newState);
    },
  };
}

export default createDB;
