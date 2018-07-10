import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { 
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {
  Home,
  Profile,
  Drawer,
  SenecaNews,
  IdCard,
  Health,
  Parking,
  SignIn
} from './components';
import Icon from 'react-native-vector-icons/Feather'

const NavOptions = {
  navigationOptions: ({navigation})=> ({
    title: 'SenecaGlobal',
    headerLeft:  <TouchableOpacity onPress={() => {navigation.openDrawer() } }>
                    <Icon 
                      name="menu" 
                      size={30} 
                      color="white"
                      style={{paddingLeft: 10}}
                    />
                  </TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#ff9800',
    },
    headerTintColor: '#fff'
  }),
}

const HomePage = createStackNavigator({Home},NavOptions);
const ProfilePage = createStackNavigator({Profile},NavOptions);
const SenecaNewsPage = createStackNavigator({SenecaNews},NavOptions);
const EcardsPage = createStackNavigator(
  {
    Ecards: {
      screen : createMaterialTopTabNavigator(
        {IdCard, Health, Parking}, 
        {
          tabBarOptions: {
            style: {
              backgroundColor: '#ff9800',
            }
          }
        }
      )
    }
  }, NavOptions)

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      header: null
    }
  }
});


export const SignedIn = createDrawerNavigator(
  {
    HomePage,EcardsPage,ProfilePage,SenecaNewsPage,
  },
  {
    contentComponent: Drawer
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};