import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { View } from "react-native";

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.addTodo}>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={(val) => changeHandler(val)} />
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    addTodo: {
        padding: 20,
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})