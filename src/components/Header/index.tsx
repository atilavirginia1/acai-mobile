import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./style";

export function Header() {
    const [text, onChangeText] = useState("");
    const [tel, onChangeTel] = useState("");
    const [valor, onChangeValor] = useState("");
    return (
        <View style={styles.content}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Nome"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTel}
                    value={tel}
                    placeholder="Telefone"
                    keyboardType='numeric'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeValor}
                    value={valor}
                    placeholder="Valor do Pedido"
                    keyboardType='numeric'
                />
            </View>
        </View>
    );
};
