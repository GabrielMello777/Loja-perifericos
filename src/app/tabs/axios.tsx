import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet,Text,Image} from 'react-native';
import axios from 'axios';

const App = () => {
  const [inputValue, setInputValue] = useState('');
const [user,setUser] = useState(require("../../../assets/icon.png"));
const [tel,setTel] = useState("");
const [title, setTitle] = useState("");

  const sendData = () => {
axios.create({



    
})


 axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
            id: inputValue
        }
})

  .then(response => {

    const userData= response.data[0];

if (userData){


    // Alert.alert('Resposta do servidor',userData.phone);
    setUser(userData.userId);
    setTel(userData.completed);
    setTitle(userData.title);

if (userData.completed === true) {
  setTel("Completo✅");
} else {
  setTel("incompleto❌");
}

}else {
    Alert.alert("Erro", "Usuário não encontrado");
  }


})

    .catch(error => {
      Alert.alert('Erro', error.message);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite algo"
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />
<Text>Titulo: {title}</Text>
   
<Text>completo? {tel}</Text>

      <Button title="Enviar dados" onPress={sendData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  }
});


export default App;