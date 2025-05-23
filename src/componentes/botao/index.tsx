import  React, { forwardRef, LegacyRef } from "react";
import { TextInputProps, TouchableOpacityProps } from "react-native";
import { Text, View, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import {style} from "./style";
import { themas } from "../../global/themes";


export function  Botao(props: TouchableOpacityProps & { titulo?: string, texto?: string}) {

const {titulo, texto}= props;




return(
<>

<View>
    

{titulo?<Text       style={{color:themas.cores.pretoFonte}}>{titulo || ""}</Text>
:null}

<TouchableOpacity style={style.btn} {...props}>

{ texto? <Text style={{color: "#E0E0E0"}}>{texto || ""}</Text>
:null}
</TouchableOpacity>


</View>


</>




)}