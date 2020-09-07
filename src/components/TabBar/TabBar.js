import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/Home/Home';
import Profile from '../../screens/TabScreens/Profile/index';
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        inactiveColor="#d81850"
        activeColor="#fff"
        barStyle={{backgroundColor: '#FF80B4'}}>
        <Tab.Screen
          name="Notícias"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="suitcase" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Vagas"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon1 name="newspaper" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon1 name="home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Conexões"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon1 name="person-sharp" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Mensagens"
          component={Profile}
          options={{
            tabBarBadge: 10,
            tabBarIcon: ({color}) => (
              <Icon1 name="chatbubbles-sharp" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;
