import React, { useState, useRef } from 'react';
import { Linking } from 'react-native';
import { StyleSheet, Text, 
         View, Switch, ScrollView, 
         TouchableOpacity, TextInput } from 'react-native';
import { HeaderText } from '../acai-mobile/src/components/HeaderText';
import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  
  const buttonRef = useRef(null);
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);
  const [item5, setItem5] = useState(false);
  const [item6, setItem6] = useState(false);
  const [item7, setItem7] = useState(false);
  const [item8, setItem8] = useState(false);
  const [item9, setItem9] = useState(false);
  const [item10, setItem10] = useState(false);
  const [item11, setItem11] = useState(false);
  const [text, onChangeText] = useState("");
  const [tel, onChangeTel] = useState("");
  const [valor, onChangeValor] = useState("");
  const [ingrediente, setIngrediente] = useState([

    { id: 1, nome: 'Açaí' },
    { id: 2, nome: 'Ninho' },
    { id: 3, nome: 'Banana' },
    { id: 4, nome: 'Kiwi' },
    { id: 5, nome: 'Morango' },
    { id: 6, nome: 'Nutella' },
    { id: 7, nome: 'Leite Condensado' },
    { id: 8, nome: 'Chocoball' },
    { id: 9, nome: 'Granola' },
    { id: 10, nome: 'Amendoim' },
    { id: 11, nome: 'Cereja' },

  ]);

  function openPage() {
    let string = 'Olá, gostaria de pedir:' + '\n' + '\n';

    if (item1) {
      string += ingrediente[0].nome + '\n';
    }

    if (item2) {
      string += ingrediente[1].nome + '\n';
    }

    if (item3) {
      string += ingrediente[2].nome + '\n';
    }

    if (item4) {
      string += ingrediente[3].nome + '\n';
    }

    if (item5) {
      string += ingrediente[4].nome + '\n';
    }

    if (item6) {
      string += ingrediente[5].nome + '\n';
    }

    if (item7) {
      string += ingrediente[6].nome + '\n';
    }

    if (item8) {
      string += ingrediente[7].nome + '\n';
    }

    if (item9) {
      string += ingrediente[8].nome + '\n';
    }

    if (item10) {
      string += ingrediente[9].nome + '\n' + '\n' + '\n';
    }

    string+= "*- Nome:* " + text + '\n' +
             "*- Tel:* " + tel + '\n' +
             "*- Valor do pedido:* " + valor + '\n' ;


    Linking.openURL('https://wa.me/5584987092120?text=' + string);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Açaí Mobile</Text>
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
          placeholder="Valor do pedido"
          keyboardType='numeric'
        />
      </View>
      <HeaderText title={"Acompanhamentos"} />

      <ScrollView
        showsVerticalScrollIndicator={false}>

        <View style={styles.content2}>
          <Text style={styles.text}>Açaí</Text>
          <Switch
            value={item1}
            onValueChange={(valor) => setItem1(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Ninho</Text>
          <Switch
            value={item2}
            onValueChange={(valor) => setItem2(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Banana</Text>
          <Switch
            value={item3}
            onValueChange={(valor) => setItem3(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Kiwi</Text>
          <Switch
            value={item4}
            onValueChange={(valor) => setItem4(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Morango</Text>
          <Switch
            value={item5}
            onValueChange={(valor) => setItem5(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Nutella</Text>
          <Switch
            value={item6}
            onValueChange={(valor) => setItem6(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Leite Condensado</Text>
          <Switch
            value={item7}
            onValueChange={(valor) => setItem7(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Chocoball</Text>
          <Switch
            value={item8}
            onValueChange={(valor) => setItem8(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Granola</Text>
          <Switch
            value={item9}
            onValueChange={(valor) => setItem9(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Amendoim</Text>
          <Switch
            value={item10}
            onValueChange={(valor) => setItem10(valor)}
          />
        </View>

        <View style={styles.content2}>
          <Text style={styles.text}>Cereja</Text>
          <Switch
            value={item11}
            onValueChange={(valor) => setItem11(valor)}
          />
        </View>

      </ScrollView>

      <View style={styles.containerBtn}>
        <ButtonAnimated
          style={styles.btn} 
          onPress={openPage}
          duration={2000}
          animation="bounce"
        >
          <Text style={styles.txtBtn}>Enviar Pedido</Text>
        </ButtonAnimated>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D390D6',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },

  content2: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },

  text: {
    fontSize: 18,
  },

  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#ffefff',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 9
  },

  containerBtn: {
    alignItems: 'center',
  },

  txtBtn: {
    textAlign: 'center',
    fontSize: 18
  },

  content: {
    flexDirection: 'row',
    marginTop: 10,
    height: 150

  },

  form: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  input: {
    alignItems: 'center',
    borderBottomColor: 'black',
    width: '80%',
    height: 50,
    borderBottomWidth: 2,
    borderColor: '#fff',
    fontSize: 20
  }

});