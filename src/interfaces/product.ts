export type product = {
  id: number;
  title: string;
  listPrice: number;
  sellingPrice: number;
  image: string;
  installmentsOptions: installmentOption;
};

type installmentOption = {
  foardprice: number;
  maxInstallments: number;
};
