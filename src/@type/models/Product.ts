type Product<T = string> = {
  _id: T;
  imageURL: T;
  title: T;
  price: number;
};

export default Product;
