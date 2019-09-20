// import React from 'react';
// import {Button,View} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// class HomeScreen extends React.Component {
//     static navigationOptions = {
//       title: 'Welcome',
//     };
//     render() {
//       const {navigate} = this.props.navigation;
//       return (
//         <View>
//         <Button
//           title="Go to Jane's profile"
//           onPress={() => navigate('Profile', {name: 'Jane'})}
//         />
//         </View>
//       );
//     }
//   }

//   class ProfileScreen extends React.Component {
//     static navigationOptions = {
//       title: 'Profile',
//     };
//     render() {
//       const {navigate} = this.props.navigation;
//       return (
//           <View>
//         <Button
//           title="Go to Jane's profile" />
//           </View>
//       );
//     }
//   }

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},
// });

// const App = createAppContainer(MainNavigator);

// export default App;

import { createSwitchNavigator,createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);