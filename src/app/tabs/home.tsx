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
import axios from "axios";
import { Botao } from "../../componentes/botao/index";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Produto } from "../../componentes/produtos";
import { Audio } from "expo-av";

export default function Index() {
  
  const [inputValue, setInputValue] = useState('');

  const sendData = () => {
    axios.post('https://api.example.com/data', {
      key: inputValue
    })
    .then(response => {
      Alert.alert('Resposta do servidor', JSON.stringify(response.data));
    })
    .catch(error => {
      Alert.alert('Erro', error.message);
    });
  };

  const [quantia, setQuantia] = useState([0, 0, 0]);
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

try {
    const { sound } = await Audio.Sound.createAsync(require("../sounds/click.mp3"));
    await sound.playAsync();
  } catch (error) {
    console.error("Erro ao tocar som:", error);
  }


  const novoTotal = [...total];
  novoTotal[indice] = Math.max(0, novoTotal[indice] + valor); 
  setTotal(novoTotal);

  switch (indice) {
    case 1:

    let quantia = novoTotal[1] / valor;
      await AsyncStorage.setItem("quant1", String(quantia));
      await AsyncStorage.setItem('p1', String(novoTotal[1]));

      break;
    case 2:
      
     quantia = novoTotal[2] / valor;
      await AsyncStorage.setItem("quant2", String(quantia));
      await AsyncStorage.setItem('p2', String(novoTotal[2]));
      break;

          default:
        Alert.alert("Produto sem estoque ❌");
        break;
  }
  calcularTotal(novoTotal);
};

const diminuirVal  = async (valor: number, indice: number) => {

  try {
    const { sound } = await Audio.Sound.createAsync(require("../sounds/blip.mp3"));
    await sound.playAsync();
  } catch (error) {
    console.error("Erro ao tocar som:", error);
  }

  const novoTotal = [...total];
  novoTotal[indice] = Math.max(0, novoTotal[indice] - valor); 
  setTotal(novoTotal);

  switch (indice) {
    case 1:

    let quantia = novoTotal[indice] / valor;
      await AsyncStorage.setItem("quant1", String(quantia));
      await AsyncStorage.setItem('p1', String(novoTotal[1]));

      break;
    case 2:
      
     quantia = novoTotal[indice] / valor;
      await AsyncStorage.setItem("quant2", String(quantia));
      await AsyncStorage.setItem('p2', String(novoTotal[2]));
      break;

      default:
        Alert.alert("Produto sem estoque ❌");
          setTotal(novoTotal);

        break;

  }

  calcularTotal(novoTotal);
};

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: "#cccccc" }}>
      <View style={[style.bara, { backgroundColor: "rgb(102, 0, 255)" , paddingBottom: 10, position: "relative"}]}>
            <Text style={{ paddingTop: 10, color: "rgb(255, 255, 255)"}}>Bem Vindo à loja de periféricos</Text>
            <Text style={{ paddingTop: 10, color: "rgb(255, 255, 255)"}}>Total a pagar: R$ {pagar}</Text>
          </View>
      <ScrollView style={{ flex: 1}}>
        <View>
          <StatusBar backgroundColor={"white"} />

          

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

                            <Text>{}</Text>


            <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, 
              borderColor: "black", paddingBottom: 10, borderRadius: 10, width: "90%", 
              backgroundColor:"rgba(255, 255, 255, 0.33)" }}>
              <Text>Total deste produto: {total[1]}</Text>
                            <Text>Preço: 250R$</Text>

              <Botao onPress={() => somarVal(250,1)} texto="Comprar" />
                                <Text>{}</Text>

              <Botao onPress={() => diminuirVal(250,1)}  texto="Retirar" />
            </View>
                <Text>{}</Text>

            {/* Produto 2 */}
            <Produto
              titulo="Mouse gamer: ViperStrike X"
              imagem={{
                uri: "https://conteudoproduto.magazineluiza.com.br/22/226948700/img/03.gif",
              }}
              valor={[2]}
              descricao="Mouse gamer com sensor de 16.000 DPI, design ergonômico e botões mecânicos. Iluminação RGB personalizável e resposta ultra-rápida para máxima precisão."
            />

           <Text>{}</Text>
             <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, 
              borderColor: "black", paddingBottom: 10, borderRadius: 10, width: "90%", 
              backgroundColor:"rgba(255, 255, 255, 0.33)" }}>
          

              <Text>Total deste produto: {total[2]}</Text>
              <Text>Preço: 200R$</Text>
              <Botao onPress={() => somarVal(200, 2)}  texto="Comprar" />
                <Text>{}</Text>
              <Botao onPress={() => diminuirVal(200, 2)} texto="Retirar" />
            </View>


       {/* Produto 3 */}
            <Produto
              titulo="Mouse gamer: ViperStrike X"
              imagem={{
                uri: "https://conteudoproduto.magazineluiza.com.br/22/226948700/img/03.gif",
              }}
              valor={[2]}
              descricao="Mouse gamer com sensor de 16.000 DPI, design ergonômico e botões mecânicos. Iluminação RGB personalizável e resposta ultra-rápida para máxima precisão."
            />

           <Text>{}</Text>
             <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, 
              borderColor: "black", paddingBottom: 10, borderRadius: 10, width: "90%", 
              backgroundColor:"rgba(255, 255, 255, 0.33)" }}>
          

              <Text>Total deste produto: {total[2]}</Text>
              <Text>Preço: 200R$</Text>
              <Botao onPress={() => somarVal(400, 3)}  texto="Comprar" />
                <Text>{}</Text>
              <Botao onPress={() => diminuirVal(400, 3)} texto="Retirar" />
            </View>


          </View>



        </View>

       
       
      </ScrollView>


    </SafeAreaView>
    
  );
}
function setData(inputValue: string) {
  throw new Error("Function not implemented.");
}

