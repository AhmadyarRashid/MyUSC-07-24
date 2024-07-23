import { Text, TextInput, View } from "react-native"

import { BLACK, FLINT_STONE_LIGHT } from "../../constants/colors"
import {  sR, wR } from "../../constants/dimensions"

function PhoneInput() {
    return <View style={{
        flexDirection: "row",
        alignItems: 'center',
    }}>

        <View style={{
            paddingRight: wR * 2,
            height: "100%",
            width: "32%",

        }}>
            <Text style={{ color: BLACK }}>Country Code</Text>
            <Text style={{ color: BLACK, fontSize: sR * 1.4, alignSelf: 'center' }}>+92</Text>
        </View>

        <View
            style={{
                paddingHorizontal: wR * 2,
                height: "100%",
                width: "68%",

            }}
        >
            <TextInput placeholder="Phone number" placeholderTextColor={FLINT_STONE_LIGHT} style={{color:BLACK}} maxLength={10} keyboardType={"number-pad"} />
        </View>



    </View>
}

export default PhoneInput