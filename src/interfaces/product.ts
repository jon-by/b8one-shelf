export type product = {
  id: number;
  title: string;
  listPrice: number;
  sellingPrice: number;
  image: string;
  installmentsOptions: installmentOption;
};

type installmentOption = {
  fowardprice: number;
  maxInstallments: number;
};


export type parsedProducts = {
    products: product[]
}