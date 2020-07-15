import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackDemo from './components/StackDemo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import GetDataDemo from './components/GetDataDemo';
import XDemo from './components/XDemo';
import UsersStack from './components/UsersStack';

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function UsersScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Users Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Users'} component={UsersStack} />
        <Tab.Screen name={'Settings'} component={StackDemo} />
        {/* <Tab.Screen name={'Settings'} component={StackDemo} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
