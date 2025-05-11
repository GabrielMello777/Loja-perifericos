import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { themas } from "../global/themes";
import Animated, { Keyframe, useAnimatedStyle, useSharedValue, withTiming, Easing } 
from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');



export const style = StyleSheet.create({


produtos:{

alignItems: "center",
justifyContent: "center",
textAlign: "center",


 
},

bara: {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  paddingVertical: 16,
  backgroundColor: "rgb(102, 0, 255)", 
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
}


});
