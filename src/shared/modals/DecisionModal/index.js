import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import { CloseCircle } from "iconsax-react-native"

import VerticalSpace from "../../verticalSpace"
import SolidButton from "../../buttons/solidButton"
import HollowButton from "../../buttons/HollowButton"

import { FLINT_STONE, FLINT_STONE_LIGHT, PINBALL, THEME_LIGHT, WHITE } from "../../../constants/colors"
import { height, hR, sR, wR } from "../../../constants/dimensions"

const DecisionModal = ({
    isVisible,
    label,
    message,
    onCloseModalPress,
    leftButtonText,
    rightButtonText,
    leftButtonPress,
    rightButtonPress,
}) => {
    return (
        <Modal isVisible={isVisible} style={styles.modal}>
            <View style={styles.rootContainer}>
                <TouchableOpacity onPress={onCloseModalPress}>
                    <CloseCircle size={sR * 2} color={THEME_LIGHT} variant="Bulk" />
                </TouchableOpacity>

                <VerticalSpace h={2} />

                <Text style={styles.labelText}>{label}</Text>

                <VerticalSpace h={2} />

                <Text style={styles.messageText}>{message}</Text>

                <VerticalSpace h={2} />

                <View style={styles.buttonsContainer}>
                    <HollowButton size={'md'} label={leftButtonText} onPress={leftButtonPress} />
                    <SolidButton size={'md'} label={rightButtonText} onPress={rightButtonPress} />
                </View>

            </View>
        </Modal>
    )
}

export default DecisionModal

const styles = StyleSheet.create({
    modal: {
        margin: 0, justifyContent: 'flex-end',
    },
    rootContainer: { backgroundColor: WHITE, paddingHorizontal: wR * 4, paddingVertical: hR * 4, borderTopLeftRadius: sR, borderTopRightRadius: sR },
    labelText: { fontSize: sR * 2, color: FLINT_STONE },
    messageText: { fontSize: sR * 1.4, color: FLINT_STONE_LIGHT },
    buttonsContainer: { flexDirection: "row", justifyContent: "space-between" }
})