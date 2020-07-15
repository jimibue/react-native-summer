import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GetDataDemo from './GetDataDemo';
import useAxios from 'axios-hooks';
import axios from 'axios';

function HomexScreen({route}) {
  const {user} = route.params;
  const [id, setId] = useState(user.id);
  const [data, setData] = useState([]);
  // const [{data, loading, error}, refetch] = useAxios(
  //   `https://reqres.in/api/users/${user.id}`,
  //   // `https://reqres.in/api/users/3`,
  // );

  async function getUser() {
    const {user} = route.params;
    console.log('getUser');
    console.log(user.id);
    setId(user.id);
    axios.get(`https://reqres.in/api/users/${user.id}`).then((u) => {
      setData(u.data);
      console.log(u.data);
    });
  }

  useEffect(() => {
    // console.log('useEffect');
    // console.log('route.params;');
    // const {user} = route.params;
    // console.log(user.id);
    // setId(user.id);
    getUser();
    // const {user} = route.params;
    // console.log('getUser');
    // console.log(user.id);
    // setId(user.id);
    // axios.get(`https://reqres.in/api/users/${user.id}`).then((u) => {
    //   setData(u.data);
    //   console.log(u.data);
    // });
    // refetch();
    return () => {
      // cleanup;
      // setId(0);
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello {user.first_name}</Text>
      <Text>Could do axios call with {user.id}</Text>
      <Text>Company {data && data.ad && data.ad.company}</Text>
      <Text>email {data && data.data && data.data.email}</Text>
    </View>
  );
}
const Stack = createStackNavigator();
export default function XDemo() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={GetDataDemo} />
      <Stack.Screen name="User" component={HomexScreen} />
    </Stack.Navigator>
  );
}
