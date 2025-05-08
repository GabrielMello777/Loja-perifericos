import { Text, View, Image, ScrollView, SafeAreaView, Alert, TouchableOpacity, Button } from "react-native";
import { Link } from "expo-router";
import { Produto } from "../componentes/produtos/index";
import React, { useEffect, useState } from "react";
import { soma } from "../funcoes/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { style } from "./style";
import { LinearGradient } from 'expo-linear-gradient';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/build/Camera.types';

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





          <Text>Pagar: {pagar}</Text>

          <View style={style.produtos}>
            <Produto titulo="Gabriel" imagem={require("../imgs/image.png")} valor={[1]} descricao="Fone de ouvido muito daora" />
            <Text>Total deste produto: {total[1]}</Text>

            <TouchableOpacity onPress={() => somarVal(1)}>
              <Text>fazer 1</Text>
            </TouchableOpacity>

            <Produto titulo="DOIS DOIS" imagem={require("../imgs/image.png")} valor={[2]} q={2} />
            <Text>Total deste produto: {total[2]}</Text>

            <TouchableOpacity onPress={() => somarVal(2)}>
              <Text>fazer 2</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Link href="/dois"> Ir</Link>
      </ScrollView>
    </SafeAreaView>
  );
}
