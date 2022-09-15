import { ReactElement, MouseEventHandler } from 'react'
import { CSVLink } from "react-csv";
import { useSelector } from 'react-redux';
import { Row, Col } from "reactstrap";
import { selectSazonalidades } from '../../store/sazonalidade/sazonalidade-selector';
import CustomButton from "../customButton/CustomButton";
import CustomCard from "../customCard/CustomCard";
import TipoDeEncarte from "./encarteComponents/TipoDeEncarte";
import IconContainer from './encarteComponents/IconContainer';
import CustomTable from '../customTable/CustomTable';
import SazonalidadeTableBody from '../customTable/SazonalidadeTableBody';
import ProductTableBody from '../customTable/ProductTableBody';
import { productTableHeader, produtosIcons, sazonalidadeIconsList, sazonalidadeTableHeader } from '../../utils/data';

 export type Icon = {
  text: string;
  icon: ReactElement;
  onClick?:MouseEventHandler<MouseEvent>
};

export default function Encarte() {
  const sazonalidadesList = useSelector(selectSazonalidades);
  console.log(sazonalidadesList)
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
          <SazonalidadeTableBody tableBody={sazonalidadesList}/>
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
          <ProductTableBody tableBody={sazonalidadesList[0]? sazonalidadesList[0].products:[]}/>
        </CustomTable>
      </CustomCard>
      </>
  )
}
