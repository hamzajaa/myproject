import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [peopel, setPepeol] = useState([
    { name: 'hamza', key: 1 },
    { name: 'salah', key: 2 },
    { name: 'omar', key: 3 },
    { name: 'yassine', key: 4 },
    { name: 'hamid', key: 5 },
    { name: 'mustapha', key: 6 },
    { name: 'aziz', key: 7 }
  ]);

  return (
    <View style={styles.container}>

      <ScrollView>

        {peopel.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}

        {/* {peopel.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })} */}

      </ScrollView>

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
  }
});
