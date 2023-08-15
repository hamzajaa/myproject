import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('hamza');
  const [age, setAge] = useState('22');

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      
      <TextInput
      multiline
      style={styles.input}
      placeholder='e.g Jhon Doe'
      onChangeText={(val) => setName(val)}
      />

     <TextInput
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g 45'
      onChangeText={(val) => setAge(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({ // object : key value
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
  }
});
