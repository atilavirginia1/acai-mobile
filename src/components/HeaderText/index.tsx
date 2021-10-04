import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

type Props = {
    title: string;
}
export function HeaderText({title}: Props){
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
};
