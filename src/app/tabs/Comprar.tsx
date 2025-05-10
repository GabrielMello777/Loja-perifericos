import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert
} from "react-native";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { style } from "../style";
import { Botao } from "../../componentes/botao/index";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Produto } from "../../componentes/produtos";

export default function Teste() {

const [total, setTotal] = useState(0.0);
const [quantia, setQuantia] = useState([0, 0, 0]); 
const [itens, setItens] = useState([0, 0, 0]); 
useEffect(() => {
  const fetchTotal = async () => {
    const totalSalvo = await AsyncStorage.getItem('total');
    const p1Salvo = await AsyncStorage.getItem('p1');
    const p2Salvo = await AsyncStorage.getItem('p2');

    const p1 = Number(p1Salvo) || 0;
    const p2 = Number(p2Salvo) || 0;

    setTotal(totalSalvo ? parseFloat(totalSalvo) : 0.0);
    setQuantia([0, p1, p2]);


  let q1 = 0;
  let q2 = 0;

  if (p1 != 0) { 
    q1 = p1 / 250;
  }

  if (p2 != 0) {
    q2 = p2 / 200;
  }

  setItens([0, q1, q2]);

  };

  fetchTotal();

  const intervalId = setInterval(() => {
    fetchTotal();
  }, 5000);

  return () => clearInterval(intervalId); // importante: limpa o intervalo ao desmontar
}, []);


  function pagar() {
if (total!=0.0){ 
setTotal(0.0);
    AsyncStorage.setItem('total', '0.0');
    AsyncStorage.setItem('p1', '0');
    AsyncStorage.setItem('p2', '0');

Alert.alert("Compra realizada com sucesso ✅");
}else{

Alert.alert("Carinho vazio ❌");

}
  }

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Comprar</Text>

      <Text>{total}</Text>

        <Text> Fone gamer: PhantomX Pro {quantia[1] } ({itens[1]}) </Text>
       <Text> Mouse gamer: ViperStrike X :{quantia[2]} ({itens[2]}) </Text>

<View style={{ width: '100%' }}>
      <Botao
        texto="pagar"
        onPress={pagar}></Botao>
         </View>
    </View>
  );
}
