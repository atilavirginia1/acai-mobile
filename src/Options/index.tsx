import React, {useState} from "react";
import { View, Text } from "react-native";
import { Checkbox } from 'react-native-paper';
import { styles } from "./style";

type Props = {
    ingrediente: string;
}

export function Options({ ingrediente }: Props) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Checkbox.Item
                    label={ingrediente}
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color={'purple'}
                />
            </View>

        </View>
    );
};
