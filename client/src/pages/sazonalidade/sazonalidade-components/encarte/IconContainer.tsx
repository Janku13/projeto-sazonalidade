import { Col } from "reactstrap";
import { text } from "stream/consumers";
import { MouseEvent } from "react";
import { Icon } from "./Encarte";
import { IconText } from "../../../../utils/data";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import { selectSazonalidades } from "../../../../store/sazonalidade/sazonalidade-selector";
import { transformSazonalidadeToCsvData } from "../../../../utils/transform-data";

type Props= {
  iconClickAction: (e: MouseEvent<HTMLTableRowElement>, index: IconText) => void;
  iconData: Icon
};

export default function IconContainer({ iconData, iconClickAction }: Props) {

  const sazonalidadesList = useSelector(selectSazonalidades);

  if (iconData.text === IconText.exportarCsv) {
    const { headers, data } = transformSazonalidadeToCsvData(sazonalidadesList);
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
