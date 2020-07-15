import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GetDataDemo from './GetDataDemo';
import User from './User';

const Stack = createStackNavigator();

export default function UsersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={GetDataDemo} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}
