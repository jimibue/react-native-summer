import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from 'react-native';
import useAxios from 'axios-hooks';

export default function GetDataDemo({navigation}) {
  const [{data, loading, error}, refetch] = useAxios(
    'https://reqres.in/api/users?delay=1',
  );

  if (loading) return <ActivityIndicator size="large" />;
  if (error)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );

  function renderUsers() {
    if (data && data.data.length <= 0) {
      return (
        <View>
          <Text>No Users</Text>
        </View>
      );
    }
    return data.data.map((user) => {
      return (
        <Pressable
          onPress={() =>
            navigation.navigate('User', {
              user,
            })
          }>
          <View style={styles.userCard}>
            <Text>{`${user.first_name} ${user.last_name}`}</Text>
          </View>
        </Pressable>
      );
    });
  }

  return (
    <View>
      <Text>Get Data Demo</Text>
      <ScrollView>{renderUsers()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userCard: {
    height: 300,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
  },
});
