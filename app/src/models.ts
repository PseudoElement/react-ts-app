export interface IProduct {
  id?: number;
  image: string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: {
    rate: number | undefined | null;
    count: number | undefined | null;
  };
}
export interface ICreateProductProps {
  closeModal: () => void;
  title: string;
  loadNewProduct: (data: any) => void;
}
