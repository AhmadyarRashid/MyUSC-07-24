import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import { Back } from "iconsax-react-native"

import VerticalSpace from "../../verticalSpace"
import OutlineTextInput from "../../TextInput/OutlineTextInput"
import Textarea from "../../TextInput/Textarea"
import Dropzone from "../../Dropzone"
import SolidButton from "../../buttons/solidButton"

import { THEME_LIGHT, WHITE } from "../../../constants/colors"
import { hR, sR, wR } from "../../../constants/dimensions"

const ComplaintModal = ({ isVisible, onCloseModal }) => {
    return <Modal isVisible={isVisible} style={styles.modal}>
        <View style={styles.rootContainer}>
            <ScrollView automaticallyAdjustKeyboardInsets={true} keyboardShouldPersistTaps={"always"}>

                <TouchableOpacity onPress={onCloseModal}>
                    <Back size={sR * 4} color={THEME_LIGHT} variant={'Bold'} />
                </TouchableOpacity>

                <VerticalSpace h={4} />

                <Text style={styles.headingText}>Register Complaint</Text>

                <VerticalSpace h={4} />

                <OutlineTextInput placeholder={`Complaint title`} />

                <VerticalSpace h={4} />

                <Textarea placeholder={`Complaint message...`}/>

                <VerticalSpace h={4} />

                <Dropzone />

                <VerticalSpace h={4} />

                <SolidButton label={`Submit`} />
            </ScrollView>
        </View>
    </Modal>
}

export default ComplaintModal

const styles = StyleSheet.create({
    modal: { margin: 0 },
    rootContainer: { backgroundColor: WHITE, flex: 1, paddingHorizontal: wR * 4, paddingVertical: hR * 4 },
    headingText:{color:THEME_LIGHT,fontSize:sR*1.4,fontWeight:'600'}
})