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
import { IconText, productTableHeader, produtosIcons, sazonalidadeIconsList, sazonalidadeTableHeader } from '../../../../utils/data';
import IconContainer from './IconContainer';
import TipoDeEncarte from './TipoDeEncarte';
 import { MouseEvent } from "react";



 
 export type Icon = {
  text: IconText;
  icon: ReactElement;
  onClick?:MouseEventHandler<MouseEvent>
};

export type ProductBySazonalidade = {
  sazonalidadeId: string
  products:ProductType[]
}

export default function Encarte() {
  const [productsList,setProductsList] = useState<ProductBySazonalidade[]>([])
  const sazonalidadesList = useSelector(selectSazonalidades);

  const iconClickAction = (e: MouseEvent<HTMLTableRowElement>, iconText: IconText) => {
    if (iconText === IconText.exportarCsv) {
      console.log('csv')
    }
    
  }

  const selectSazonalidade = (e: MouseEvent<HTMLTableRowElement>, id: string,products:ProductType[]) => {
    const sazonalidadeIsSelected = productsList.find((item) => {
      return item.sazonalidadeId === id
    })
    if (sazonalidadeIsSelected) {
      const productListAfterUnselect = productsList.filter(item => item.sazonalidadeId !== id)
      setProductsList(productListAfterUnselect)
    } else {
      setProductsList((prev) => {
        return [
          ...prev,
          {
            sazonalidadeId: id,
            products
          }
        ]
      })
    }
    console.log(sazonalidadeIsSelected)
  }
  const isSelectedSazonalidade = (id: string) => {
    return productsList.some(item=> item.sazonalidadeId === id)
  }

  const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

  return (
    <>
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
                  <IconContainer iconClickAction={iconClickAction} iconData={item} />
                )
            })
          }
        </Row>
      </Col>
      <CustomCard doesHavePadding={true}>
        <CustomTable tableHeader={sazonalidadeTableHeader}>
          <SazonalidadeTableBody
            isSelectedSazonalidade={isSelectedSazonalidade}
            selectSazonalidade={selectSazonalidade} tableBody={sazonalidadesList} />
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
                  <IconContainer iconData={item} iconClickAction={iconClickAction} />
                )
              })
            }
          </Row>
      </Col>  
      <CustomCard doesHavePadding={true}>
        <CustomTable tableHeader={productTableHeader}>
          <>
          {
            productsList.map((item) => {
              return <ProductTableBody  tableBody={item.products}/>
            })
          }
          </>
        
        </CustomTable>
      </CustomCard>
      </>
  )
}
