import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        // keyExtractor={(item) => item.id}
        data={peopel}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />


      {/* <FlatList  // automatically added a key and better performance
        data={peopel}
        renderItem={ ({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      /> */}

      {/* <ScrollView>
        {peopel.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

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
