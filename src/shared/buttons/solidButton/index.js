import { Pressable, Text } from "react-native"

import { THEME_LIGHT, WHITE } from "../../../constants/colors"
import { hR, sR } from "../../../constants/dimensions"

function SolidButton ({label}){
    return <Pressable style={{backgroundColor:THEME_LIGHT,paddingVertical:hR*2,alignItems:"center",borderRadius:sR}}>
        <Text style={{fontSize:sR*1.8,color:WHITE}}>{label}</Text>
    </Pressable>
}

export default SolidButton