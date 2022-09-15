import { ProductType } from "./product-type";

export type SazonalidadeType = {
  _id: string;
  user: string;
  products: ProductType[];
  name: string;
  description: string;
  dataInicio: string;
  dataFim: string;
  dataProx: string;
  status: string;
  dataDeCadastro: string;
  createAt: Date;
  updateAt: Date;
};