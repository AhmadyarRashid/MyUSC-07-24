import {  StyleSheet, Text, TouchableOpacity } from "react-native"

import { THEME_LIGHT, WHITE } from "../../../constants/colors"
import { hR, sR } from "../../../constants/dimensions"

function SolidButton({ label,onPress,customButtonStyle,customLabelStyle }) {
    return <TouchableOpacity style={[styles.buttonContainer,customButtonStyle]} onPress={onPress}>
        <Text style={[styles.buttonLabel,customLabelStyle]}>{label}</Text>
    </TouchableOpacity>
}

export default SolidButton

const styles = StyleSheet.create({
    buttonContainer: { backgroundColor: THEME_LIGHT, paddingVertical: hR * 2, alignItems: "center", borderRadius: sR },
    buttonLabel: { fontSize: sR * 1.6, color: WHITE }
})