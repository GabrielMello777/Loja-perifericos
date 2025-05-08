import { Text, View, Image, ScrollView, SafeAreaView, Alert, TouchableOpacity, Button, StatusBar } from "react-native";
import { Link } from "expo-router";
import { Produto } from "../componentes/produtos/index";
import React, { useEffect, useState } from "react";
import { soma } from "../funcoes/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { style } from "./style";
import { LinearGradient } from 'expo-linear-gradient';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/build/Camera.types';
import { Botao } from "../componentes/botao";

export default function Index() {
  const [imagem, setImagem] = useState(require("../imgs/image.png"));
  const [total, setTotal] = useState([0, 0, 0]);
  const [pagar, setPagar] = useState(0.0);

  useEffect(() => {

  }, []);

  const calcularTotal = () => {
    const soma = total.reduce((acc, val) => acc + Number(val), 0);
    setPagar(Number(soma));
  };

  const somarVal = (i: number) => {
    const novoTotal = [...total];
    novoTotal[i] = novoTotal[i] + i;
    setTotal(novoTotal);
    calcularTotal();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View>

<StatusBar backgroundColor={"white"}>
  
</StatusBar>


<View style={style.bara}>

<Text style={{paddingTop: 10}}>Bem Vindo a loja perifericos</Text>

<Text>Total a pagar: {pagar}</Text>

</View>


          <View style={style.produtos}>
            <Produto titulo="Gabriel"imagem={{ uri: "https://m.media-amazon.com/images/I/514n0rnHIgL._AC_UF1000,1000_QL80_.jpg" }} valor={[1]} descricao="Fone de ouvido muito daora" />

            <View style={{justifyContent: "center", alignItems: "center",}}>
<Text>Total deste produto: {total[1]}</Text>

<Botao onPress={() => somarVal(1)} titulo="Comprar produto 2" texto="Comprar"> 
        

            </Botao>

            </View>

            <Produto titulo="DOIS DOIS" 
            imagem={{ uri: "https://conteudoproduto.magazineluiza.com.br/22/226948700/img/03.gif" }} 
            valor={[2]} descricao="mouse gamer"/>

<View style={{justifyContent: "center", alignItems: "center",}}>
<Text>Total deste produto: {total[2]}</Text>

<Botao onPress={() => somarVal(2)} titulo="Comprar produto 2" texto="Comprar"> 
        

            </Botao>

            </View>


          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
