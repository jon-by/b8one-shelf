export type shelfContextType = {
  cartIds: number[];
  addOrRemoveCartItens: (id:number) => void
  wishListIds: number[]
  addOrRemoveWishListItens: (id:number) => void
};
