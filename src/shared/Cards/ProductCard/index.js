import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import VerticalSpace from "../../verticalSpace"
import SolidButton from "../../buttons/solidButton"

import { BLACK, FLINT_STONE_LIGHT, THEME_LIGHT, WHITE } from "../../../constants/colors"
import { hR, sR, wR } from "../../../constants/dimensions"

const ProductCard = () => {
    return (
        <TouchableOpacity
            style={styles.rootContainer}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View>
                    <Text style={styles.orderNumberText}>Flour (ATTA)</Text>
                    <Text style={styles.orderPlacedText}>In-Stock: 200</Text>
                </View>

                <View>
                    <Image
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3rdgKrSMYBgt-1ijZIVRRMo1JgmJ7jm_mX_7MvYlfX0wXOOwo1decL1CpobILhO-uU0&usqp=CAU" }}
                        style={{ height: sR*8, width: sR*8 }}
                    />
                </View>
            </View>

            <VerticalSpace h={2} />

            <SolidButton label={"Add to Cart"} customButtonStyle={{paddingVertical:hR*1.4}} customLabelStyle={{fontSize:sR*1.4}} /> 
        </TouchableOpacity>)
}

export default ProductCard

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: wR * 4,
        paddingVertical: hR * 2,
        marginVertical: hR * 2,
        marginHorizontal: wR * 2,
        backgroundColor: WHITE,
        borderRadius: sR,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    orderNumberText: { color: BLACK, fontSize: sR * 1.6, fontWeight: "500" },
    orderStatusText: { color: THEME_LIGHT, fontSize: sR * 1.4, fontWeight: "600" },
    orderPlacedText: { color: FLINT_STONE_LIGHT, fontSize: sR * 1.3 }
})