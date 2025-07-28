import type { RootState } from './index';
import type { FavoriteItem } from './favoritesSlice';

export const selectFavorites = (state: RootState): FavoriteItem[] => state.favorites.items;

export const selectIsFavorite =
  (id: string) =>
  (state: RootState): boolean =>
    state.favorites.items.some((item) => item.id === id);

export const selectFavoritesCount = (state: RootState): number => state.favorites.items.length;
