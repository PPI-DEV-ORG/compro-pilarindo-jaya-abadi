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
