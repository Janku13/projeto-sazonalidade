
import CustomCard from '../../components/customCard/CustomCard'
import Encarte from './sazonalidade-components/encarte/Encarte';


export default function Sazonalidade() {
  return (
      <section className='section'>
        <h1>Configurar Homepage</h1>
        <CustomCard doesHavePadding={true}>
          <Encarte/>
        </CustomCard>
      </section>
  )
}
