import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function InputDemo() {
  const [value, setValue] = React.useState('');
  function handlePress() {
    console.log('handlePress');
    console.log(value);
  }
  function handleLongPress() {
    console.log('handleLongPress');
  }
  function handlePressIn() {
    console.log('handlePressIn');
  }
  function handlePressOut() {
    console.log('handlePressOut');
  }
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text>Press</Text>
      </TouchableOpacity>

      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        style={styles.inputStyle}
      />

      <Pressable
        style={styles.btnStyles}
        onPress={handlePress}
        onLongPress={handleLongPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <Text>Presable</Text>
      </Pressable>
    </View>
  );
}

const styles = {
  btnStyles: {
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  inputStyle: {height: 40, borderColor: 'gray', borderWidth: 1},
};
