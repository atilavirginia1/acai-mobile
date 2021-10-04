import React from "react";
import { View, TouchableOpacity, Text, Linking } from "react-native";
import { styles } from "./style";

type Props = {
    title: string;
}

export function Button({ title }: Props) {

    const onPress = () => {
        
        Linking.openURL('https://google.com').catch(err => console.error("Couldn't load page", err));
    
    }
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};
