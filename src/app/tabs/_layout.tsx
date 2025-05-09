import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Compras" }} />
      <Tabs.Screen name="teste" options={{ title: "Teste" }} />
    </Tabs>
  );
}
