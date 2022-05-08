export interface IProductItem {
  category: string;
  title: string;
  price: number;
  description: string;
  id: number;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
}
