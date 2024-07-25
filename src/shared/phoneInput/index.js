import { StyleSheet, Text, TextInput, View } from "react-native"

import { BLACK, FLINT_STONE_LIGHT, THEME_LIGHT } from "../../constants/colors"
import { hR, sR, wR } from "../../constants/dimensions"

function PhoneInput() {
    return <View style={styles.rootContainer}>

        <View style={styles.leftContainer}>
            <Text style={styles.countryCodeLabelText}>Country Code</Text>
            <Text style={styles.countryCodeText}>+92</Text>
        </View>

        <View
            style={styles.rightContainer}
        >
            <TextInput placeholder="Phone number" placeholderTextColor={FLINT_STONE_LIGHT} style={styles.input} maxLength={10} keyboardType={"number-pad"} />
        </View>
    </View>
}

export default PhoneInput

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: hR,
        borderBottomColor: THEME_LIGHT
    },
    leftContainer: {
        paddingRight: wR * 2,
        height: "100%",
        width: "32%",
    },
    countryCodeLabelText: { color: BLACK },
    countryCodeText: { color: BLACK, fontSize: sR * 1.6, alignSelf: 'center' },
    rightContainer: {
        paddingHorizontal: wR * 2,
        height: "100%",
        width: "68%",

    },
    input: { color: BLACK, fontSize: sR * 1.6 }
})