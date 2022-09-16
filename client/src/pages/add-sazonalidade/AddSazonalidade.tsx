import { MouseEvent } from "react";
import { useNavigate } from 'react-router-dom'
import { Row } from 'reactstrap'
import CustomButton from '../../components/customButton/CustomButton'
import CustomCard from '../../components/customCard/CustomCard'

export default function AddSazonalidade() {
  const navigation = useNavigate()
  const goBackToHome = (e: MouseEvent<HTMLButtonElement>) => {
    navigation('/')
  }
  return (
      <section className='section'>
        <h1>Configurar Homepage</h1>
      <CustomCard doesHavePadding={true}>
        <>
          <h3>
            Adicionar itens
         </h3>
          <Row>
            <div className="left-side">
              <CustomButton onSubmitHandler={goBackToHome} buttonText={"Voltar"}/>
            </div>
          </Row>
        </>
      </CustomCard>
      <CustomCard doesHavePadding={true}>
        <form action="">
          <label htmlFor="userName">Nome do Usuário</label>
          <input type="text" id="userName" />
        </form>
      </CustomCard>
      </section>
  )
}
