import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator  } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import TabBarIcon from "../components/TabBarIcon";

import InicioScreen from "./../screens/InicioScreen";
import PrincipalScreen from "./../screens/PrincipalScreen";
import AlbumScreen from "./../screens/AlbumScreen";
import PhotoScreen from "./../screens/PhotoScreen";

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

const HomeStack = createStackNavigator(
    {
      Home: {screen:InicioScreen},
    },
    config
  );
  
HomeStack.navigationOptions = {
    tabBarLabel: 'Inicio',
    tabBarIcon: ({focused}) =>(
        <TabBarIcon name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} 
        size={30} focused={focused} />
    )
  };
  
  HomeStack.path = '';
//---------------------------------------------------
const BuscarStack = createStackNavigator(
    {
        Buscar: {screen: PrincipalScreen},
    },
    config
    );
    
    BuscarStack.navigationOptions = {
    tabBarLabel: 'Usuarios',
    tabBarIcon: ({focused}) =>(
        <TabBarIcon name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} 
        size={30} focused={focused} />
    )
    };
    
    BuscarStack.path = '';
  //---------------------------------------------------
  const AlbumStack = createStackNavigator(
    {
      Album: {screen: AlbumScreen},
      Photos: {screen: PhotoScreen}
    },
    config
  );
  
  AlbumStack.navigationOptions = {
    tabBarLabel: 'Álbumes',
    tabBarIcon: ({focused}) =>(
        <TabBarIcon name={Platform.OS === 'ios' ? 'ios-albums' : 'md-albums'} 
        size={30} focused={focused} />
    )
  };
  
  AlbumStack.path = '';
  //---------------------------------------------------
  
  const tabNavigator = createBottomTabNavigator({
    HomeStack,
    BuscarStack,
    AlbumStack,
    //SettingsStack,
  });
  
  tabNavigator.path = '';
  
  export default tabNavigator;