import React, {useState, useRef} from 'react';
import TabBar from '../../components/TabBar/TabBar';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  UIManager,
} from 'react-native';
import {HeaderBackground} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFace from '../../assets/facebook.svg';
import IconGoog from '../../assets/google.svg';
import IconLogo from '../../assets/logo-conectadas.svg';

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
    <HeaderBackground
      style={{
        top: 0,
        left: 0,
        backgroundColor: '#232954',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#232954" />
      <TabBar />
    </HeaderBackground>
  );
};

const styles = StyleSheet.create({
  container: {},

  image: {
    maxHeight: 200,
    maxWidth: 450,
    marginBottom: 10,
    justifyContent: 'flex-start',
  },

  input: {
    paddingLeft: 20,
    minWidth: 350,
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ffff',
    color: '#DBD8B3',
    fontFamily: 'Roboto',
    fontSize: 18,
  },

  background: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderRadius: 30,
    backgroundColor: '#FF80B5',

    minWidth: 350,
    textAlign: 'center',
    minHeight: 50,
    alignItems: 'center',
    fontWeight: '500',
    shadowColor: '#000',
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
    color: 'white',
    paddingTop: 13,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto',
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
