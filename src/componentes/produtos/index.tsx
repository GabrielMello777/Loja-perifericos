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
import Animated, { InterpolateRGB, Keyframe, useAnimatedStyle, useSharedValue, withTiming, Easing } 
from 'react-native-reanimated';


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

const [cor,setCor]= useState("");
let i=0;



useEffect(() => {

  const cores = [
    "rgb(0, 255, 255)", 
    "rgb(128, 0, 255)",
    "rgb(255, 0, 0)",   
    "rgb(255, 165, 0)", 
    "rgb(0, 255, 0)",   
    "rgb(255, 255, 0)", 
  ];

  const trocar = setInterval(() => {

setCor(cores[i]);

i= (i+1) % cores.length;




  }, 1000); 


  return () => clearInterval(1000);


}, []);
  return (

<Animated.View 

style={[ style.itens, {borderColor: cor}]}
>

  
      <Text style={style.txtGrande}>{titulo}</Text>

      <Text {...props}>{nome}</Text>

      <View style={style.imagens}>

      <Image source={imagem} style={style.img} />

      </View>


      <Text {...props} style={style.desc} >{descricao}</Text>

      </Animated.View>
    );
}
