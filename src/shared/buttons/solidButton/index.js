import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { THEME_LIGHT, WHITE } from "../../../constants/colors";
import { ButtonSize } from "../../../constants/enum";
import { hR, sR } from "../../../constants/dimensions";

const SolidButton = ({
    label,
    customTextStyle,
    customButtonStyle,
    onPress,
    size,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonStyle(size), customButtonStyle]}
        >
            <Text style={[styles.textStyle, customTextStyle]}>{label}</Text>
        </TouchableOpacity>
    );
};

export default SolidButton;

const styles = StyleSheet.create({
    buttonStyle: (size) => ({
        backgroundColor: THEME_LIGHT,
        width: ButtonSize[size],
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: hR * 1.6,
        borderRadius: sR,
        flexDirection: "row",
    }),
    textStyle: {
        fontSize: sR * 1.4,        
        color: WHITE,
    },
});