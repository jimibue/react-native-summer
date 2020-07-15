import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';

export default function User({route}) {
  const [userExtra, setUserExtra] = useState(null);
  const {user} = route.params;
  useEffect(() => {
    const {user} = route.params;
    Axios.get(`https://reqres.in/api/users/${user.id}`).then((u) => {
      setUserExtra(u.data);
    });
  });

  return (
    <View>
      <Text>
        {user.first_name} {user.last_name} {user.id}
      </Text>
      <Text>{userExtra && userExtra.data.email}</Text>
      <Text>{userExtra && userExtra.ad.company}</Text>
    </View>
  );
}
