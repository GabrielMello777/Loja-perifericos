import { Tabs } from "expo-router";
import { Image, Text, View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: "Compras", 
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image 
                source={require("../../../assets/icon.png")} 
                style={{ width: 120, height: 120, marginRight: 8 }} 
                resizeMode="contain"
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Compras</Text>
            </View>
          )
        }}  
      />
      <Tabs.Screen name="teste" options={{ title: "Teste",
      headerTitle: () => (

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image 
                source={require("../../../assets/icon.png")} 
                style={{ width: 120, height: 120, marginRight: 8 }} 
                resizeMode="contain"
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Teste</Text>
            </View>
      )
    }}
      />
    </Tabs>
  );
}
