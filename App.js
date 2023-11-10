import * as React from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Assets,
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';




function Home({ navigation }) {
  return (
    <View style={styles.containerHome}>

      <Image source={require('./assets/foto.jpg')} style={{ width: 300, height: 300, borderRadius: 150, marginTop: 30 }} />

      <Text style={styles.textNome}>  Alessandro Henrique </Text>

      <Pressable style={styles.pressable}
        onPress={() => navigation.navigate('Experiencias')}>
        <Text>Experiencias</Text>
      </Pressable>

      <Pressable style={styles.pressable}
        onPress={() => navigation.navigate('Formacao')}
        >
        <Text>Formação</Text>
      </Pressable>

      <Pressable style={styles.pressable}
        onPress={() => navigation.navigate('Cursos')}
        >
        <Text>Cursos</Text>
      </Pressable>

    </View>
  );
}

function Experiencias() {
  return (
    <>
    <Pressable style={styles.selecaoAM}>
      <Text style={styles.textTituloAZ}>Prefeitura Recife - Terceirizado </Text>
      <Text style={styles.dataAZ}>02/01/2023 Até 30/12/2023</Text>
    </Pressable>
    <Pressable style={styles.selecaoAZ}>
        <Text style={styles.textTituloAM}>Ministeiro da Justiça - Estagiário</Text>
        <Text style={styles.dataAM}>02/01/2023 Até 30/12/2023</Text>
      </Pressable>
    </>

    
  );
}

function Formacao() {
  return (
    <Pressable style={styles.selecaoAM}>
      <Text style={styles.textTituloformacao}>Análise e Desenvolvimento de Sistemas</Text>
      <Text style={styles.textDescrisaoAZ}>Faculdade SENAC</Text>
      <Text style={styles.dataAZ}>08/2022 até 12/2024</Text>
    </Pressable>
  );
}

function Cursos() {
  return (
    <>
    <Pressable style={styles.selecaoAM}>
      <Text style={styles.textTituloformacao}>Manutenção de Hardware</Text>
      <Text style={styles.textDescrisaoAZ}>SENAC PERNAMBUCO</Text>
      <Text style={styles.dataAZ}>30 Horas</Text>
    </Pressable>
    
    <Pressable style={styles.selecaoAZ}>
      <Text style={styles.textTituloAM}>Cabeamento</Text>
      <Text style={styles.textDescrisaoAM}>ESTUDONAUTA</Text>
      <Text style={styles.dataAM}>20 Horas</Text>
    </Pressable>

    <Pressable style={styles.selecaoAM}>
      <Text style={styles.textTituloformacao}>Banco de Dados</Text>
      <Text style={styles.textDescrisaoAZ}>SENAC PERNAMBUCO</Text>
      <Text style={styles.dataAZ}>30 Horas</Text>
    </Pressable>

    <Pressable style={styles.selecaoAZ}>
      <Text style={styles.textTituloAM}>Protocolo TPC/IP</Text>
      <Text style={styles.textDescrisaoAM}>ESTUDONAUTA</Text>
      <Text style={styles.dataAM}>45 Horas</Text>
    </Pressable>

    </>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text></Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Curriculo" component={Home} />
        <Stack.Screen name="Experiencias" component={Experiencias} />
        <Stack.Screen name="Formacao" component={Formacao} />
        <Stack.Screen name="Cursos" component={Cursos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerHome:{
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#2F48D4',
    alignItems: 'center'
  },
  pressable:{
    backgroundColor: '#F6E125',
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 25
    
  },
  textNome:{
    color: '#F6E125',
    fontSize: 27,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  selecaoAM:{
    backgroundColor: '#F6E125',
    padding: 25,
    marginBottom: 1,
    marginTop: 10,
    borderRadius: 20

  },
  selecaoAZ:{
    backgroundColor: '#2F48D4',
    padding: 25,
    marginBottom: 1,
    marginTop: 10,
    borderRadius: 20

  },

  textTituloAZ:{
    color: '#2F48D4',
    fontSize: 27,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'

  },
  textTituloAM:{
    color: '#F6E125',
    fontSize: 27,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'

  },
  dataAZ:{
    color: '#2F48D4'
  },
  dataAM:{
    color: '#F6E125'
  },
  textTituloformacao:{
    color: '#2F48D4',
    fontSize: 27,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'

  },
  textDescrisaoAZ:{
    color: '#2F48D4',
    fontWeight: 'bold'
  },
  textDescrisaoAM:{
    color: '#F6E125',
    fontWeight: 'bold'
  },

  
  
})

export default App;


