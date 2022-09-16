import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Spinner } from "reactstrap";
import CustomButton from '../../../../components/customButton/CustomButton';
import CustomCard from '../../../../components/customCard/CustomCard';
import CustomTable from '../../../../components/customTable/CustomTable';
import ProductTableBody from '../../../../components/customTable/ProductTableBody';
import SazonalidadeTableBody from '../../../../components/customTable/SazonalidadeTableBody';
import { selectSazonalidades, selectSazonalidadesIsLoading } from '../../../../store/sazonalidade/sazonalidade-selector';
import { ProductBySazonalidade, ProductType } from '../../../../types';
import { IconText, productTableHeader, produtosIcons, sazonalidadeIconsList, sazonalidadeTableHeader } from '../../../../utils/data';
import { getSelectedSazonalidadesId } from '../../../../utils/transform-data';
import IconContainer from './IconContainer';
import TipoDeEncarte from './TipoDeEncarte';
import { MouseEvent } from "react";
import { deleteSazonalidadesRequest } from '../../../../store/sazonalidade/sazonalidade-action';
import { useNavigate } from 'react-router-dom';

export default function Encarte() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>()
  const isLoading = useSelector(selectSazonalidadesIsLoading)
  const [productsList, setProductsList] = useState<ProductBySazonalidade[]>([])
  const sazonalidadesList = useSelector(selectSazonalidades);

  const goToAddSazonalidadePage =  (e: MouseEvent<HTMLButtonElement>)  =>{
    console.log('e')
    navigate('/add-sazonalidade')
  }

  const iconClickAction = (e: MouseEvent<HTMLTableRowElement>, iconText: IconText) => {
    if (iconText === IconText.excluir) {
      const selectedIds = getSelectedSazonalidadesId(productsList)
      dispatch(deleteSazonalidadesRequest(selectedIds))  
      setProductsList([])
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

  }
  const isSelectedSazonalidade = (id: string) => {
    return productsList.some(item=> item.sazonalidadeId === id)
  }
  if (isLoading) {
    return <div className='center-item'>
      <Spinner/>
    </div>
  }
  
  return (
    <>
      
      <h3>
        Encartes
      </h3>
      <Row>
        <div className="left-side">
          <CustomButton onSubmitHandler={goToAddSazonalidadePage} buttonText={"Adicionar"}/>
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
            sazonalidadeIconsList.length > 0 && sazonalidadeIconsList.map((item ,idx) => {
                return (
                  <IconContainer key={idx} isProduct={false} listOfProducts={productsList} iconClickAction={iconClickAction} iconData={item} />
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
              produtosIcons.map((item,idx) => {
                return (
                  <IconContainer
                    key={idx}
                    isProduct={true}
                    listOfProducts={productsList}
                    iconData={item}
                    iconClickAction={iconClickAction}
                  />
                )
              })
            }
          </Row>
      </Col>  
      <CustomCard doesHavePadding={true}>
        <CustomTable tableHeader={productTableHeader}>
          <>
          {
            productsList.length > 0 && productsList.map((item) => {
              return <ProductTableBody key={item.sazonalidadeId} tableBody={item.products}/>
            })
          }
          </>
        
        </CustomTable>
      </CustomCard>
      </>
  )
}
