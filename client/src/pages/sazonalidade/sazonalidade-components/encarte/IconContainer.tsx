import { Col } from "reactstrap";
import { text } from "stream/consumers";
import { MouseEvent } from "react";
import { Icon, ProductBySazonalidade } from "./Encarte";
import { IconText } from "../../../../utils/data";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import { selectSazonalidades } from "../../../../store/sazonalidade/sazonalidade-selector";
import { transformProductToCsvData, transformSazonalidadeToCsvData } from "../../../../utils/transform-data";
import { ProductType } from "../../../../types";

type Props= {
  iconClickAction: (e: MouseEvent<HTMLTableRowElement>, index: IconText) => void;
  iconData: Icon;
  isProduct?: boolean;
  listOfProducts:ProductBySazonalidade[]
};

export default function IconContainer({ iconData, iconClickAction, isProduct = false,listOfProducts }: Props) {

  const sazonalidadesList = useSelector(selectSazonalidades);

  if (iconData.text === IconText.exportarCsv) {
    const { headers, data } = !isProduct ? transformSazonalidadeToCsvData(sazonalidadesList) : transformProductToCsvData(listOfProducts);;
    return <Col className='show-curser' onClick={(e: MouseEvent<HTMLTableRowElement>) => iconClickAction(e, iconData.text)}>
      <CSVLink data={data} headers={headers} separator={","} className="icon-container remove-link-underline"> 
        {iconData.icon}
        <p className="icon-text">{iconData.text}</p>
      </CSVLink>
    </Col>

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
