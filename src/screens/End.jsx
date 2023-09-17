import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";

const End = () => {
    const [inputName, setInputName] = useState("");
    const [inputSenha, setInputSenha] = useState("");

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`;

    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.card}>
                <Image source={{ uri: imageUrl }} style={styles.gif} />
                <Text style={styles.text}>R$: 999.99</Text>
                <Text style={styles.text}>Charmander</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setInputName}
                        value={inputName}
                        placeholder="DIGITE O POKEMON"
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setInputSenha}
                        value={inputSenha}
                        placeholder="DIGITE A SENHA"
                    />
    
                    <TouchableOpacity style={styles.button}>
                        <Text>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
    
};

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        padding: 20,
    },
    gif: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: "100%",
        alignItems: "center",
    },
    textInput: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#8849f5",
        padding: 10,
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#8849f5",
        padding: 10,
        borderRadius: 5,
    },
});

export default End;
