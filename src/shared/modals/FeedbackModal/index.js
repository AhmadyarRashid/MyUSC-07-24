import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import { Back } from "iconsax-react-native"

import VerticalSpace from "../../verticalSpace"
import OutlineTextInput from "../../TextInput/OutlineTextInput"
import Textarea from "../../TextInput/Textarea"
import Dropzone from "../../Dropzone"
import SolidButton from "../../buttons/solidButton"
import { Rating } from "react-native-ratings"

import { THEME_LIGHT, WHITE } from "../../../constants/colors"
import { hR, sR, wR } from "../../../constants/dimensions"

const FeedbackModal = ({ isVisible, onCloseModal }) => {
    return <Modal isVisible={isVisible} style={styles.modal}>
        <View style={styles.rootContainer}>
            <ScrollView automaticallyAdjustKeyboardInsets={true} keyboardShouldPersistTaps={"always"}>

                <TouchableOpacity onPress={onCloseModal}>
                    <Back size={sR * 4} color={THEME_LIGHT} variant={'Bold'} />
                </TouchableOpacity>

                <VerticalSpace h={4} />

                <Text style={styles.heading}>Feedback</Text>

                <VerticalSpace h={4} />

                <Textarea placeholder={`Feedback message...`} />

                <VerticalSpace h={4} />

                <Dropzone />

                <VerticalSpace h={4} />

                <Rating
                    fractions={1}
                    style={{ alignSelf: "flex-start" }}
                    ratingCount={5}
                    imageSize={sR * 2.8}
                    startingValue={0}
                //onFinishRating={(val) => setReview({ ...review, rating: val })}
                />

                <VerticalSpace h={4} />

                <SolidButton label={`Submit`} />
            </ScrollView>
        </View>
    </Modal>
}

export default FeedbackModal

const styles = StyleSheet.create({
    modal: { margin: 0 },
    rootContainer: { backgroundColor: WHITE, flex: 1, paddingHorizontal: wR * 4, paddingVertical: hR * 4 },
    heading:{color:THEME_LIGHT,fontSize:sR*1.4,fontWeight:'600'}
})