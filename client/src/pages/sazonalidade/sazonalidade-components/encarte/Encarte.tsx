import { ReactElement, MouseEventHandler, useState } from 'react'
import { CSVLink } from "react-csv";
import { useSelector } from 'react-redux';
import { Row, Col } from "reactstrap";
import CustomButton from '../../../../components/customButton/CustomButton';
import CustomCard from '../../../../components/customCard/CustomCard';
import CustomTable from '../../../../components/customTable/CustomTable';
import ProductTableBody from '../../../../components/customTable/ProductTableBody';
import SazonalidadeTableBody from '../../../../components/customTable/SazonalidadeTableBody';
import { selectSazonalidades } from '../../../../store/sazonalidade/sazonalidade-selector';
import { ProductType } from '../../../../types';
import { productTableHeader, produtosIcons, sazonalidadeIconsList, sazonalidadeTableHeader } from '../../../../utils/data';
import IconContainer from './IconContainer';
import TipoDeEncarte from './TipoDeEncarte';
 import { MouseEvent } from "react";

 export type Icon = {
  text: string;
  icon: ReactElement;
  onClick?:MouseEventHandler<MouseEvent>
};


export default function Encarte() {
  const [productsList,setProductsList] = useState<ProductType[]>()
  const sazonalidadesList = useSelector(selectSazonalidades);

  const selectSazonalidade = (e: MouseEvent<HTMLTableRowElement>,index:number) => {
    console.log(index)
  }

  const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

  return (
    <>
      <CSVLink data={sazonalidadesList}>Download me</CSVLink>;
      <h3>
        Encartes
      </h3>
      <Row>
        <div className="left-side">
          <CustomButton buttonText={"Adicionar"}/>
        </div>
      </Row>
      <h6>
        TIPO DE ENCARTE
      </h6>
      <CustomCard doesHavePadding={false}>
        <TipoDeEncarte/>
      </CustomCard>
      <h6 className="mt-5">
        ENCARTES POR SAZONALIDADE
      </h6>
      <Col lg={6}>
        <Row>
          {
            sazonalidadeIconsList.map((item) => {
                return (
                  <IconContainer text={item.text} icon={item.icon} />
                )
            })
          }
        </Row>
      </Col>
      <CustomCard doesHavePadding={true}>
        <CustomTable tableHeader={sazonalidadeTableHeader}>
          <SazonalidadeTableBody selectSazonalidade={selectSazonalidade} tableBody={sazonalidadesList}/>
        </CustomTable>
      </CustomCard>
      <h6 className="mt-5">
        LIST DE PRODUTOS
        SAZONALIDADE - ARRAIÁ
      </h6>
        <Col lg={6}>
          <Row>
            {
              produtosIcons.map((item) => {
                return (
                  <IconContainer text={item.text} icon={item.icon} />
                )
              })
            }
          </Row>
      </Col>  
      <CustomCard doesHavePadding={true}>
        <CustomTable tableHeader={productTableHeader}>
          <ProductTableBody  tableBody={sazonalidadesList[0]? sazonalidadesList[0].products:[]}/>
        </CustomTable>
      </CustomCard>
      </>
  )
}
