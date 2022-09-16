import React from 'react'
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { SazonalidadeType } from '../../types';

type Props = {
  data: SazonalidadeType[];
  
};
export default function CustomSazonalidadePDF({data}:Props) {
  return (
    <Document>
      <Page size="A4">
        <>
        {
          data.map((item) => {
            return (
              <div key={item._id}>
                <View >
                  <Text>{item._id}</Text>
                </View>
                <View >
                  <Text>{item.name}</Text>
                </View>
                <View >
                  <Text>{item.description}</Text>
                </View>
                <View >
                  <Text>{item.dataInicio}</Text>
                </View>
                <View >
                  <Text>{item.dataFim}</Text>
                </View>
                <View >
                  <Text>{item.dataProx}</Text>
                </View>
                <View >
                  <Text>{item.status}</Text>
                </View>
                <View >
                  <Text>{item.dataDeCadastro}</Text>
                </View>
                <View >
                  <Text>{item.user}</Text>
                </View>
            
              </div>
              
            )
          })
        }
        </>
        </Page>
      </Document>
  )
}
