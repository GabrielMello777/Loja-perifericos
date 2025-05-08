import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { themas } from "../../global/themes";

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({


img:{

width: Dimensions.get('window').width * 0.3,
height: Dimensions.get('window').height * 0.2,


},

imagens:{

justifyContent: "center",
alignItems: "center",



},
txtGrande:{

fontSize: 20,
alignContent: "center",
justifyContent: "center",
textAlign: "center",


},

desc:{

borderRadius: 40,
borderWidth: 1,
borderColor: themas.cores.roxo,
textAlign: "center",
width: "100%",


},


itens:{
    padding: 16,

    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 40,
    borderColor: themas.cores.preto,
    width: "90%",
    overflow: "hidden",
}



});
