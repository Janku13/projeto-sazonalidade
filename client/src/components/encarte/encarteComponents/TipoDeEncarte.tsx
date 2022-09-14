import { useState } from "react";
import { Row ,Col} from "reactstrap";
export default function TipoDeEncarte() {
  const [choosenEncarte, setChoosenEncarte] = useState('SAZONAL');
  const encarteItems: string[] = ['PARA VOCÊ','PRDUTOS MAIS VENDIDOS','SAZONAL','NAS LOJAS','ESPECIIAIS','NOVIDADES','BATATA']
  return (
    <div className='p-3'>
      <Row>
        {encarteItems.map((item) => {
          return <Col
             className={choosenEncarte === item ? 'overflow center-item show-curser' :'show-curser center-item'}
            onClick={() => setChoosenEncarte(item)}>
            <div  className='encart-item-container'>
              {item}
            </div>
          </Col>
        })}
      </Row>
    </div>
  )
}
