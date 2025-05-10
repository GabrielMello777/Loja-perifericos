import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { style } from "../style";
import { Botao } from "../../componentes/botao/index";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Produto } from "../../componentes/produtos";

export default function Index() {
  

  
  const [total, setTotal] = useState([100, 250, 200]); 
  const [pagar, setPagar] = useState(0.0);
  const Tab= createBottomTabNavigator();

  useEffect(() => {
    const salvaDados = async () => {
      const pagarSalvo = await AsyncStorage.getItem('total');
      const p1Salvo = await AsyncStorage.getItem('p1');
      const p2Salvo = await AsyncStorage.getItem('p2');


      const novoTotal = [
        0,
        Number(p1Salvo) || 0,
        Number(p2Salvo) || 0
      ];
      setTotal(novoTotal);
      setPagar(Number(pagarSalvo) || 0);
    };

  const intervalId = setInterval(() => {
    salvaDados();
  }, 5000); 


    salvaDados();
  }, []);

const calcularTotal = async (valores: number[]) => {
  const soma = valores.reduce((acc, val) => acc + Number(val), 0);
  setPagar(soma);
  await AsyncStorage.setItem('total', String(soma));
};

  // Somar item
const somarVal = async (valor: number, indice: number) => {
  const novoTotal = [...total];
  novoTotal[indice] = Math.max(0, novoTotal[indice] + valor); 
  setTotal(novoTotal);

  switch (indice) {
    case 1:
      await AsyncStorage.setItem('p1', String(novoTotal[1]));
      break;
    case 2:
      await AsyncStorage.setItem('p2', String(novoTotal[2]));
      break;
  }

  calcularTotal(novoTotal);
};

const diminuirVal  = async (valor: number, indice: number) => {
  const novoTotal = [...total];
  novoTotal[indice] = Math.max(0, novoTotal[indice] - valor); 
  setTotal(novoTotal);

  switch (indice) {
    case 1:
      await AsyncStorage.setItem('p1', String(novoTotal[1]));
      break;
    case 2:
      await AsyncStorage.setItem('p2', String(novoTotal[2]));
      break;
  }

  calcularTotal(novoTotal);
};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#cccccc" }}>
        <View>
          <StatusBar backgroundColor={"white"} />

          <View style={[style.bara, { backgroundColor: "rgb(102, 0, 255)" , paddingBottom: 10}]}>
            <Text style={{ paddingTop: 10, color: "rgb(255, 255, 255)"}}>Bem Vindo à loja de periféricos</Text>
            <Text style={{ paddingTop: 10, color: "rgb(255, 255, 255)"}}>Total a pagar: R$ {pagar}</Text>
          </View>

          <View style={[style.produtos, { paddingTop: 10, paddingBottom: 10 }]}>
            {/* Produto 1 */}
            <Produto
              titulo="Fone gamer: PhantomX Pro"
              imagem={{
                uri: "https://www.sades.com.tw/image/data/new/20210507142350.gif",
              }}

              valor={[1]}
              descricao="Fone gamer com drivers de 50mm, cancelamento de ruído ativo e microfone retrátil. Design ergonômico com almofadas de espuma de memória e iluminação RGB personalizável."
            />
            <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, 
              borderColor: "black", paddingBottom: 10, borderRadius: 10, width: "90%", 
              backgroundColor:"rgba(255, 255, 255, 0.33)" }}>
              <Text>Total deste produto: {total[1]}</Text>
                            <Text>Preço: 250R$</Text>

              <Botao onPress={() => somarVal(250,1)} titulo="Comprar produto 1" texto="Comprar" />
              <Botao onPress={() => diminuirVal(250,1)} titulo="Retirar produto 1" texto="Retirar" />
            </View>

            {/* Produto 2 */}
            <Produto
              titulo="Mouse gamer: ViperStrike X"
              imagem={{
                uri: "https://conteudoproduto.magazineluiza.com.br/22/226948700/img/03.gif",
              }}
              valor={[2]}
              descricao="Mouse gamer com sensor de 16.000 DPI, design ergonômico e botões mecânicos. Iluminação RGB personalizável e resposta ultra-rápida para máxima precisão."
            />
           
             <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, 
              borderColor: "black", paddingBottom: 10, borderRadius: 10, width: "90%", 
              backgroundColor:"rgba(255, 255, 255, 0.33)" }}>
             
             
              <Text>Total deste produto: {total[2]}</Text>
              <Text>Preço: 200R$</Text>
              <Botao onPress={() => somarVal(200, 2)} titulo="Comprar produto 2" texto="Comprar" />
              <Botao onPress={() => diminuirVal(200, 2)} titulo="Retirar produto 2" texto="Retirar" />
            </View>
          </View>



        </View>

       
       
      </ScrollView>


    </SafeAreaView>
    
  );
}
