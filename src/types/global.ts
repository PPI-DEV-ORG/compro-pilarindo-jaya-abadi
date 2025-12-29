export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: {
    id: string;
    name: string;
    color: string;
  }[];
};

export type ProductItem = {
  id: string;
  name: string;
  imageUrls: string[];
  description: string;
  model: string;
  releaseDate: string | null;
  availability: {
    id: string;
    status: string;
    color: string;
  };
  stock: number;
  category: {
    id: string;
    name: string;
    color: string;
  }[];
  tags: {
    id: string;
    name: string;
    color: string;
  }[];
  brand: {
    id: string;
    name: string;
    color: string;
  };
  price: string;
  datasheetUrl: string;
  createdAt: string;
  createdBy: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string | null;
  };
};
