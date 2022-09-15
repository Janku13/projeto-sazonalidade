export type ProductType = {
  _id: string;
  productName: string;
  nomeFamilia: string;
  marca: string;
  class: string;
  unidade: string;
  quantidade: number;
  categoria: string;
};

export type ProductBySazonalidade = {
  sazonalidadeId: string
  products:ProductType[]
}