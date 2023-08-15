import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('hamza');
  const [person, setPerson] = useState({name: 'mario', age: 40});
  const handleClick = () => {
    setName('salah');
    setPerson({name: 'luigi', age:45});
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and His age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={handleClick}/>
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
  },
  buttonContainer: {
    marginTop: 20,
  }
});
