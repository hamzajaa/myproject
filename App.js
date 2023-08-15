import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [peopel, setPepeol] = useState([
    { name: 'hamza', id: 1 },
    { name: 'salah', id: 2 },
    { name: 'omar', id: 3 },
    { name: 'yassine', id: 4 },
    { name: 'hamid', id: 5 },
    { name: 'mustapha', id: 6 },
    { name: 'aziz', id: 7 }
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPepeol((prevPeople) => {
      console.log(prevPeople);
      return prevPeople.filter(person => person.id !== id); // id person.id !== id the person will be remove from array
    })
  }
  
  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        data={peopel}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({ // object : key value
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
  }
});
