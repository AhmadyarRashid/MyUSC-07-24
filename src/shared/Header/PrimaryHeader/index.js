import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Back } from "iconsax-react-native"

import { THEME_LIGHT } from "../../../constants/colors"
import { hR, sR, wR } from "../../../constants/dimensions"
import images from "../../../constants/images"

const PrimaryHeader = ({onPress}) => {
    return <View style={styles.rootContainer}>

        <TouchableOpacity onPress={onPress}>
            <Back size={sR * 4} color={THEME_LIGHT} variant={'Bold'} />
        </TouchableOpacity>

        <Image source={images.LOGO} style={styles.logo}/>
    </View>
}

export default PrimaryHeader

const styles = StyleSheet.create({
    rootContainer:{paddingVertical:hR*3,paddingHorizontal:wR*4,flexDirection:"row",alignItems:"center",justifyContent:"space-between" },
    logo:{height:sR*6,width:sR*6}
})