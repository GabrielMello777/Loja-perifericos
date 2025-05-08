import { Text, View, Image, ScrollView, SafeAreaView} from "react-native";
import { Link } from "expo-router";
import {Produto} from "../componentes/produtos/index"
import { useState } from "react";
import { useEffect } from "react";

let a= 0;
let b=1;

export function soma(a: any,b: any){


let soma= a+b;

return soma;

}