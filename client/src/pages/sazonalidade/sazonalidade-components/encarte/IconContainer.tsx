import { Col } from "reactstrap";
import { Icon } from "./Encarte";


export default function IconContainer({text,icon}:Icon) {
  return (
    <Col className='show-curser'>
      <div className="icon-container">
        {icon}
        <p className="icon-text">{text}</p>
      </div>
    </Col>
  )
}
