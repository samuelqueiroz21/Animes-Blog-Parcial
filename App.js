import {SafeAreaView, StyleSheet} from 'react-native'

import {Componentes} from './components/Animes'
export default function App(){
  return(
    <SafeAreaView style={styles.body}>
      <Componentes
        
      />
    </SafeAreaView>

  )
}
const styles = StyleSheet.create(
  {
    body:{
      width: '100%',
      height: '100%',
      backgroundColor: '#F8F8FF'
    }
  }
  )