// import Ionicons from 'react-native-vector-icons/Ionicons';
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CableDemo from './components/CableDemo';
// import {ActionCableProvider} from 'react-actioncable-provider';

import ActionCable from 'react-native-actioncable';
import ActionCableProvider from 'react-actioncable-provider';

const cable = ActionCable.createConsumer('ws://localhost:3000/cable');

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <CableDemo />
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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <ActionCableProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    // </ActionCableProvider>
  );
}

// /https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296
