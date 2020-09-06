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

const Login = ({navigation}) => {
  //const passwordRef = useRef();
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

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={{marginLeft: 30, top: 20}}>
          <Icon name="arrow-left" size={40} color="#FF80B5" />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <IconLogo width={300} height={200} />
        </View>

        <KeyboardAvoidingView style={styles.background}>
          <View accessibilityLabel="login com email e senha cadastrados">
            <TextInput //value={email}
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
            <TextInput //value={ password }
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
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.createText}>Esqueci minha senha.</Text>
              <Text
                style={{
                  color: '#fff',

                  fontSize: 20,
                  marginBottom: 20,
                  marginLeft: 30,
                }}>
                ─────────── OU ───────────
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: 4,
                }}
                accessibilityLabel="login com redes sociais">
                <View style={{marginLeft: 0}}>
                  <IconFace width={90} height={90} />
                </View>
                <IconGoog width={90} height={90} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.text}>
                Ao continuar, você concorda com os seguintes termos e condições.
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text style={styles.text}>Política de Privacidade</Text>
                <Text style={styles.text}>Termos e Condições</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
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
export default Login;
