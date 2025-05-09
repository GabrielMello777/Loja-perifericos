import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View>
      <Text>Página Inicial</Text>
      <Button title="Ir para abas" onPress={() => router.push('/tabs')} />
    </View>
  );
}
