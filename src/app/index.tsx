import { View, Text, Button, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

useEffect(() => {

  setTimeout(() => {
router.push('/tabs')
  }, 2000);

}, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>


<Image source={require("../../assets/icon.png")}  style={{width: 100, height: 100}}/>

      <Text>Carregando pagina inicial</Text>

     
    </View>
  );
}
