import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInputProps,
  ImageProps,
  ImageSourcePropType,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { style } from "./style";
import { LinearGradient } from "expo-linear-gradient";

type ProdutoProps = TextInputProps &
  ImageProps & {
    nome?: string;
    titulo?: string;
    total?: number;
    valor?: number[];
    i?: number;
    q?: number;
    descricao?: string;
    imagem: ImageSourcePropType;
  };

export function Produto(props: ProdutoProps) {
  const {
    nome,
    imagem,
    titulo,
    descricao,
  } = props;



  return (


<LinearGradient style={style.itens} colors={['#800080', '#ffff']}>
      <Text style={style.txtGrande}>{titulo}</Text>

      <Text {...props}>{nome}</Text>

      <View style={style.imagens}>

      <Image source={imagem} style={style.img} />

      </View>


      <Text {...props} style={style.desc} >{descricao}</Text>

      </LinearGradient>
  );
}
