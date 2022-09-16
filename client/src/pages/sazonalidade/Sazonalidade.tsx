
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CustomCard from '../../components/customCard/CustomCard'
import { fetchSazonalidadeRequest } from '../../store/sazonalidade/sazonalidade-action';
import Encarte from './sazonalidade-components/encarte/Encarte';


export default function Sazonalidade() {
    const dispatch = useDispatch<any>(); //need to fix this type
  useEffect(() => {
    dispatch(fetchSazonalidadeRequest())  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
      <section className='section'>
        <h1>Configurar Homepage</h1>
        <CustomCard doesHavePadding={true}>
          <Encarte/>
        </CustomCard>
      </section>
  )
}
