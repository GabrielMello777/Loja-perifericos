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

bara:{

    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: 10,
    borderWidth: 2,
    borderRadius: 40,

},


});
