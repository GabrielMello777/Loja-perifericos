import {
  Text,
  View,
  Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";
import { style } from "../style"; // Certifique-se de que style.ts NÃO está na pasta de rotas
import { Botao } from "../../componentes/botao/index";

export default function Comprar() {
  const [total, setTotal] = useState(0.0);
  const [quantia, setQuantia] = useState([0, 0, 0]);
  const [itens, setItens] = useState([0, 0, 0]);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const totalSalvo = await AsyncStorage.getItem("total");
        const p1Salvo = await AsyncStorage.getItem("p1");
        const p2Salvo = await AsyncStorage.getItem("p2");
        const q1Salvo = await AsyncStorage.getItem("quant1");
        const q2Salvo = await AsyncStorage.getItem("quant2");

        const p1 = Number(p1Salvo) || 0;
        const p2 = Number(p2Salvo) || 0;

        setTotal(totalSalvo ? parseFloat(totalSalvo) : 0.0);
        setQuantia([0, p1, p2]);
        setItens([0, Number(q1Salvo) || 0, Number(q2Salvo) || 0]);
      } catch (error) {
        console.error("Erro ao buscar dados do AsyncStorage", error);
      }
    };

    fetchTotal();

    const intervalId = setInterval(fetchTotal, 5000);
    return () => clearInterval(intervalId);
  }, []);

const sons = {
  sucesso: require("../sounds/din.mp3"),
erro: require("../sounds/erro.mp3"),
};


async function tocarSom(nome: keyof typeof sons = "sucesso") {
  try {
    const { sound } = await Audio.Sound.createAsync(sons[nome]);
    await sound.playAsync();
  } catch (error) {
    console.error("Erro ao tocar som:", error);
  }
}
  async function pagar() {

    if (total !== 0.0) {
      setTotal(0.0);
      await AsyncStorage.multiSet([
        ["total", "0.0"],
        ["p1", "0"],
        ["p2", "0"],
        ["quant1", "0"],
        ["quant2", "0"]
      ]);
          await tocarSom("sucesso");
      Alert.alert("Compra realizada com sucesso ✅");
    } else {
                await tocarSom("erro");

      Alert.alert("Carrinho vazio ❌");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Pagar</Text>
      <Text style={{ fontSize: 30 }}>Total a ser pago: {total}</Text>
      <Text>Itens:</Text>
      <Text>Fone gamer: PhantomX Pro {quantia[1]} ({itens[1]})</Text>
      <Text>Mouse gamer: ViperStrike X: {quantia[2]} ({itens[2]})</Text>

      <View style={{ width: "100%" }}>
        <Botao texto="Pagar" onPress={pagar} />
      </View>
    </View>
  );
}
