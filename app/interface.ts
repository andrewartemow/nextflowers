export interface ProductSimplified {
  id: number;
  title: string;
  price: number;
  images: string[];
  categoryName: string;
}

export interface FullProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
  categoryName: string;
  description: string;
  rating: number;
  price_id: string;
}
