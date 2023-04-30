export type cartContextType = {
  cartIds: number[];
  handleCart: (id:number) => void
  wishListIds: number[]
  handleWishList: (id:number) => void
};
