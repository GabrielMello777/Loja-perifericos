import { Text, View, Image, ScrollView, SafeAreaView} from "react-native";
import { Link } from "expo-router";
import {Produto} from "../componentes/produtos/index"
import { useEffect, useState } from "react";
import {soma} from "../funcoes/functions"
import AsyncStorage, { AsyncStorageStatic } from "@react-native-async-storage/async-storage";
import { CameraView } from "expo-camera";




export default function Index() {

const [ímagem,setImagem]= useState(require("../imgs/image.png"));
const [valorTotal, setValortotal]= useState(0.0);
const valores = [1, 2, 3];

useEffect(() => {
 const fetchData = async () => {
  const total = await AsyncStorage.getItem('total');
  setValortotal(total ? parseFloat(total) : 0)

};



  fetchData();
}, []);


async function fazertotal() {

        const total = await AsyncStorage.getItem('total');
        setValortotal(total ? parseFloat(total) : 0)

}


fazertotal();

  return (
    <SafeAreaView style={{flex: 1}}>

    <ScrollView style={{flex: 1}}> 


<Link href="">Voltar</Link>


    </ScrollView>
    </SafeAreaView>

  );



  
  
}


