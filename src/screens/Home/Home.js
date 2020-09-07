import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  LayoutAnimation,
  StyleSheet,
  TextInput,
  UIManager,
  Image,
  TouchableOpacity,
} from 'react-native';

import Post from '../../components/Post/Post';
import Categories from '../../components/Categories/Categories';

import Perfil from '../../assets/perfil.jpg';
import Perfil1 from '../../assets/perfil1.jpg';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Home = ({navigation}) => {
  // const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  /* const handleLoginPress = () => {
          firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => setErrorMessage(error.message));
      };*/

  LayoutAnimation.easeInEaseOut();

  return (
    <View
      style={{
        top: 0,
        left: 0,
        height: 690,
        backgroundColor: '#F8B',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#232954" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCorrect={true}
        placeholderTextColor="#000000"
        returnKeyType={'next'}
        onSubmitEditing={() => {
          passwordTextInput.focus();
        }}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <View style={styles.text}>
        <Text style={styles.textH1}>Assuntos de seu interesse</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{height: 1, top: 10}}>
        <Categories
          color="#694fad"
          textColor="white"
          text="Marketing Digital"></Categories>
        <Categories
          color="#694fad"
          textColor="white"
          text="Planos de Conta"></Categories>
        <Categories
          color="#694fad"
          textColor="white"
          text="Iniciando minha empresa"></Categories>
        <Categories
          color="#694fad"
          textColor="white"
          text="Como empreender?"></Categories>
        <Categories
          color="#694fad"
          textColor="white"
          text="Como abrir minha empresa de sucesso?"></Categories>
        <Categories
          color="#694fad"
          textColor="white"
          text="Como utilizar planos de conta na minha confeitaria?"></Categories>
        <Categories
          color="#694fad"
          textColor="white"
          text="Conteudo iniciante"></Categories>
        <Categories
          color="#694fad"
          textColor="white"
          text="Conteudo medio"></Categories>
        <Categories
          color="#694fad"
          textColor="white"
          text="Conteudo avançado"></Categories>
      </ScrollView>

      <ScrollView
        vertiical
        showsVerticalScrollIndicator={true}
        style={{width: '100%', height: 200, marginTop: 20}}>
        <View style={styles.text}>
          <Text style={styles.textH1}>Feed</Text>
        </View>

        <Post
          title="Lorena Moreira"
          url={Perfil}
          text="Freelancer- home office">
          <Text>
            Todos querem alcançar o sucesso e sentir realização no nossso
            trabalho. Só queremos respeito nas nossas escolhas e sororidade
            entre as mulheres.
          </Text>
        </Post>
        <Post title="Bruna Moraes" url={Perfil1} text="Designer at Zee.Dog">
          <Text>
            Meu primeiro post nessa rede social! Animada em fazer contato com
            vocês!
          </Text>
        </Post>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },

  image: {
    maxHeight: 200,
    maxWidth: 450,
    marginBottom: 10,
    justifyContent: 'flex-start',
  },

  input: {
    paddingLeft: 25,
    minWidth: 40,
    marginBottom: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    color: '#DBD8B3',
    fontFamily: 'Roboto',
    fontSize: 18,
  },

  background: {
    flex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button1: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
    marginTop: 16,
    minWidth: 30,
    textAlign: 'center',
    minHeight: 60,
    alignItems: 'center',
    fontWeight: '500',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    fontFamily: 'Roboto',
  },

  buttonText: {
    textTransform: 'uppercase',
    backgroundColor: '#ffffff',
    paddingTop: 15,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  textH1: {
    top: 5,
    fontSize: 20,
    color: '#fff',
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 20,
    marginTop: 0,
  },

  createText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 21,
    color: '#bbb',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
});

export default Home;
