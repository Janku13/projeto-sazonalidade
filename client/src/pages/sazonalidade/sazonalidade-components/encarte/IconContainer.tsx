import { Col } from "reactstrap";
import { MouseEvent } from "react";
import { PDFDownloadLink} from '@react-pdf/renderer';
import { IconText } from "../../../../utils/data";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import { selectSazonalidades } from "../../../../store/sazonalidade/sazonalidade-selector";
import { getProductsListFromProductBySazonalidade, transformProductToCsvData, transformSazonalidadeToCsvData } from "../../../../utils/transform-data";
import { IconType, ProductBySazonalidade } from "../../../../types";
import CustomSazonalidadePDF from "../../../../components/customPdf/CustomSazonalidadePDF";
import CustomProductPDF from "../../../../components/customPdf/CustomProductPdf";


type Props= {
  iconClickAction: (e: MouseEvent<HTMLTableRowElement>, index: IconText) => void;
  iconData: IconType;
  isProduct?: boolean;
  listOfProducts:ProductBySazonalidade[]
};


export default function IconContainer({ iconData, iconClickAction, isProduct = false,listOfProducts }: Props) {

  const sazonalidadesList = useSelector(selectSazonalidades);

  if (iconData.text === IconText.exportarPdf) {
    return <Col className='show-curser'>
      <PDFDownloadLink className="icon-container remove-link-underline" document={isProduct ?<CustomProductPDF data={getProductsListFromProductBySazonalidade(listOfProducts)}/> : <CustomSazonalidadePDF data={sazonalidadesList} />  } fileName="data.pdf">
        {({ blob, url, loading, error }) => (  //realizar melhor tratamento de loading e de error
          <>
            {iconData.icon}
            <p className="icon-text">{iconData.text}</p>
          </>
        )}
      </PDFDownloadLink>
    </Col>

  }

  if (iconData.text === IconText.exportarCsv) {
    if (sazonalidadesList.length === 0) {
     return  <Col className='show-curser' onClick={(e: MouseEvent<HTMLTableRowElement>) => iconClickAction(e, iconData.text)}>
      <CSVLink data={[]}  separator={","} className="icon-container remove-link-underline"> 
        {iconData.icon}
        <p className="icon-text">{iconData.text}</p>
      </CSVLink>
    </Col>
    } else {
    const { headers, data } = !isProduct ? transformSazonalidadeToCsvData(sazonalidadesList) : transformProductToCsvData(listOfProducts);
    return <Col className='show-curser' onClick={(e: MouseEvent<HTMLTableRowElement>) => iconClickAction(e, iconData.text)}>
      <CSVLink data={data} headers={headers} separator={","} className="icon-container remove-link-underline"> 
        {iconData.icon}
        <p className="icon-text">{iconData.text}</p>
      </CSVLink>
    </Col>
    }

  }
  return (
    <Col className='show-curser'
      onClick={(e: MouseEvent<HTMLTableRowElement>) => iconClickAction(e, iconData.text)}
    >
      <div className="icon-container">
        {iconData.icon}
        <p className="icon-text">{iconData.text}</p>
      </div>
    </Col>
  )
}
