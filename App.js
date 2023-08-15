import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, seName] = useState('hamza')

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ // object : key value
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
