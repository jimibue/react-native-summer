import React from 'react';

import {ScrollView, Text, View, StyleSheet, Image} from 'react-native';

export default function ScrollViewDemo() {
  return (
    <ScrollView>
      <View style={styles.bigBox}>
        <Text>start</Text>
      </View>
      <View style={styles.bigBox}></View>
      <View style={styles.bigBox}>
        <Text>sdf</Text>
      </View>
      <ScrollView style horizontal>
        <View style={styles.hBox} />
        <View style={styles.hBox} />
        <View style={styles.hBox} />
        <View style={styles.hBox} />
      </ScrollView>
      <View style={styles.bigBox}>
        <Text>yo</Text>
      </View>
      <Image
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.bigBox}>
        <Text>end</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // contanier: {
  //   flex: 1,
  // },
  bigBox: {
    width: 450,
    height: 300,
    backgroundColor: 'teal',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hBox: {
    height: 200,
    width: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'red',
  },
  img: {
    width: 50,
    height: 50,
  },
});
