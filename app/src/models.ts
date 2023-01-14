export interface IProduct {
  id: number;
  image:string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: {
    rate: number | null;
    count: number | null;
  };
}
