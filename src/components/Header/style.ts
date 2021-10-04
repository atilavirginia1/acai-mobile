import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    content: {
        flexDirection: 'row',
        marginTop: 10,
        height: 150

    },

    form:{
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    input:{
        alignItems: 'center',
        borderBottomColor: 'black',
        width: '80%',
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#fff',
        fontSize: 20
    }
})