import { View } from "react-native"

import { hR } from "../../constants/dimensions"

function VerticalSpace({h}){
    return <View style={{height:hR*h}} />
}

export default VerticalSpace