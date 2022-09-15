import { Col } from "reactstrap";
import { text } from "stream/consumers";
import { MouseEvent } from "react";
import { Icon } from "./Encarte";
import { IconText } from "../../../../utils/data";
import { CSVLink } from "react-csv";
const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];
type Props= {
  iconClickAction: (e: MouseEvent<HTMLTableRowElement>, index: IconText) => void;
  iconData: Icon
};

export default function IconContainer({ iconData, iconClickAction }: Props) {
  if (iconData.text === IconText.exportarCsv) {
    return <Col className='show-curser' onClick={(e: MouseEvent<HTMLTableRowElement>) => iconClickAction(e, iconData.text)}>
      <CSVLink data={csvData} className="icon-container remove-link-underline"> 
        {iconData.icon}
        <p className="icon-text">{iconData.text}</p>
      </CSVLink>
    </Col>

  }
  return (
    <Col className='show-curser' onClick={(e: MouseEvent<HTMLTableRowElement>) => iconClickAction(e, iconData.text)}>
      <div className="icon-container">
        {iconData.icon}
        <p className="icon-text">{iconData.text}</p>
      </div>
    </Col>
  )
}
