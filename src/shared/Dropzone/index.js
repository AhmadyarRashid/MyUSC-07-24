import { StyleSheet, Text, TouchableOpacity } from "react-native"

import HorizontalSpace from "../HorizontalSpace";

import { FLINT_STONE, THEME_LIGHT, WHITE_SMOKE } from "../../constants/colors";
import { hR, sR } from "../../constants/dimensions";

const Dropzone = ({onPress}) => {
    return <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.plusText}>+</Text>

        <HorizontalSpace w={4} />

        <Text style={styles.labelText}>Upload Images</Text>
    </TouchableOpacity>

}

export default Dropzone

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE_SMOKE,
        paddingVertical: hR * 4,
        alignItems: "center",
        borderRadius: sR,
        flexDirection: "row",
        justifyContent: "center",
        borderWidth:1,
        borderColor:THEME_LIGHT,
        borderStyle:"dashed"
    },
    plusText: {
        fontSize: sR * 2.4,
        color: THEME_LIGHT,
    },
    labelText: {
        fontSize: sR * 1.2,
        color:THEME_LIGHT
    },
});
