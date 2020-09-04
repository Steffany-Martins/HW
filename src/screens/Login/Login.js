import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  UIManager,
} from 'react-native';
import LOGOSVG from '../../assets/logo-conectadas.svg';
import BACKGROUND from '../../assets/background.png';
import {HeaderBackground} from 'react-navigation-stack';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Login = ({navigation}) => {
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => setErrorMessage(error.message));
  };

  LayoutAnimation.easeInEaseOut();

  return (
    <HeaderBackground style={{top: 0, left: 0, backgroundColor: '#232954'}}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.background}>
          <View
            styles={{
              alignSelf: 'center',
              marginTop: 10,
              marginBottom: 300,
              lineHeight: 21,
            }}
            accessibilityLabel="logo conectadas">
            <LOGOSVG width="300" height="200" />
          </View>
          <View>
            <TextInput
              //value={email}
              style={styles.input}
              placeholder="Email"
              autoCorrect={false}
              placeholderTextColor="#DBD8B3"
              returnKeyType={'next'}
              onSubmitEditing={() => {
                passwordTextInput.focus();
              }}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              //value={ password }
              style={styles.input}
              secureTextEntry={true}
              placeholder="Senha"
              placeholderTextColor="#DBD8B3"
              //ref={(input) => { this.passwordTextInput = input; }}
              //returnKeyType = { "next" }
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Pronto</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>Esqueci minha senha.</Text>
            </TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.text}>Ainda não tem conta?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </HeaderBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 20,
  },

  image: {
    maxHeight: 200,
    maxWidth: 450,
    marginBottom: 50,
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
    backgroundColor: '#E7724B',
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
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 21,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 180,
  },

  createText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 21,
    color: '#E7724B',
    alignSelf: 'center',
    marginTop: 50,
  },
});
export default Login;
