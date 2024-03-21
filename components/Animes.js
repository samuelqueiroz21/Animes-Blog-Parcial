import {Text, View, StyleSheet, Pressable, Image} from 'react-native'

export function Componentes(){
  
  return(
    <View>
      <Text style={styles.nav}>Animes-Blog</Text>
      <Pressable>
        <Image source={require('../assets/Demon-Slayer.png')} style={styles.esquerda}/>
        <Text style={styles.esquerda_desc}>Demon Slayer</Text>
      </Pressable>
       
      <Pressable>
        <Image source={require('../assets/Naruto.png')} style={styles.direita}/>
        <Text style={styles.direita_desc}>Naruto</Text>
      </Pressable>

      <Pressable>
        <Image source={require('../assets/Dragon-Ball.png')} style={styles.esquerda}/>
        <Text style={styles.esquerda_desc}>Dragon Ball</Text>
      </Pressable>

      <Pressable>
        <Image source={require('../assets/Nanatsu-no-Taizai.png')} style={styles.direita}/>
        <Text style={styles.direita_desc}>Nanatsu no Taizai</Text>
      </Pressable>
      
      <Pressable>
        <Image source={require('../assets/One-Piece.png')} style={styles.esquerda}/>
        <Text style={styles.esquerda_desc}>One Piece</Text>
      </Pressable>

      <Pressable>
        <Image source={require('../assets/One-Punch-Man.png')} style={styles.direita}/>
        <Text style={styles.direita_desc}>One Punch Man</Text>
      </Pressable>
      
      
      <Text style={styles.footer}>Created by Samuel Queiroz</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    nav: {
      backgroundColor: '#0088ff',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20
    },
    esquerda:{
      marginLeft: 50,
      marginTop: 50,
    },
    esquerda_desc:{
        width: 100,
        height:  40,
        backgroundColor: '#0088ff',
        marginLeft: 50,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 10
    },
    direita:{
      marginLeft: 250,
      marginTop: -122,
    },
    direita_desc:{
        width: 100,
        height:  40,
        backgroundColor: '#0088ff',
        marginLeft: 250,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 10        
    },
    footer:{
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#0088ff',
        height: 150,
        marginTop: 120,
        paddingTop: 30
    }
}
)
