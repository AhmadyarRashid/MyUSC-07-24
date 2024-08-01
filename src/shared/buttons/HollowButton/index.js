import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { THEME_LIGHT, WHITE } from "../../../constants/colors";
import { ButtonSize } from "../../../constants/enum";
import { hR, sR } from "../../../constants/dimensions";

const HollowButton = ({
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

export default HollowButton;

const styles = StyleSheet.create({
    buttonStyle: (size) => ({
        backgroundColor: WHITE,
        width: ButtonSize[size],
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: hR * 1.6,
        borderRadius: sR,
        flexDirection: "row",
        borderWidth:1.6,
        borderColor:THEME_LIGHT
    }),
    textStyle: {
        fontSize: sR * 1.4,        
        color: THEME_LIGHT,
    },
});
