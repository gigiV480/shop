
export type Message = {
    id: string;
    from: 'user' | 'ai';
    content: string;
    timestamp: string;
  };
  

export type FavoriteItemProps = {
    item: {
      id: string;
      name: string;
      description: string;
      image: string;
      price: number;
    };
    onAddToCart?: (id: string) => void;
    onRemove?: (id: string) => void;
  };

  export type CartItemProps = {
    item: {
      id: string;
      name: string;
      size: string;
      description: string;
      image: string;
      price: number;
      selected?: boolean;
    };
    onRemove?: (id: string) => void;
    onAddToCart?: (id: string) => void;
    onSelectChange?: (id: string) => void;
  };

export type Favorite = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export type Carti = {
  id: string;
  name: string;
  size: string;
  price: number;
  image: string;
  description: string;
  selected?: boolean;
};

export type ShopFillerType = {
  title: string;
  location: string;
  mapLocation: [number, number];

}