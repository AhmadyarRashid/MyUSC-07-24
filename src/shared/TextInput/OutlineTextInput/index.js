import { TextInput } from "react-native-paper"

import { hR, sR, wR } from "../../../constants/dimensions"
import {  FLINT_STONE, PINBALL, THEME_LIGHT, WHITE } from "../../../constants/colors"

const OutlineTextInput = ({placeholder}) => {
    return <TextInput
        label={placeholder}
        mode={`outlined`}
        style={{
            width: wR * 92,
            backgroundColor: WHITE,
            fontSize: sR * 1.2,
            paddingHorizontal: wR * 2,
        }}
        activeOutlineColor={THEME_LIGHT}
        outlineColor={PINBALL}
        theme={{
            roundness: sR,
            colors: {
                text:  FLINT_STONE
              },
        }}
        autoCapitalize="none"
    />
}

export default OutlineTextInput