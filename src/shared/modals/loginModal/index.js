import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";
import { Back } from "iconsax-react-native";
import { OtpInput } from "react-native-otp-entry";

import PhoneInput from "../../phoneInput";
import SolidButton from "../../buttons/solidButton";

import { BLACK, THEME_LIGHT, WHITE } from "../../../constants/colors";
import { hR, sR, wR } from "../../../constants/dimensions";
import VerticalSpace from "../../verticalSpace";

function LoginModal({ isVisible, onCloseModal }) {

  const [verificationCode, setVerificationCode] = useState(false)

  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <View style={styles.rootContainer}>
        <ScrollView automaticallyAdjustKeyboardInsets={true} keyboardShouldPersistTaps={"always"}>
          <TouchableOpacity onPress={onCloseModal}>
            <Back size={sR * 4} color={THEME_LIGHT} variant={'Bold'} />
          </TouchableOpacity>

          <VerticalSpace h={4} />

          <Text style={styles.headingText}>What is{'\n'}your phone number?</Text>

          <VerticalSpace h={4} />

          <Text style={styles.messageText}>Tap "Continue" to get an SMS confirmation to help you use MyUSC. We would like your phone number."</Text>

          <VerticalSpace h={4} />

          <PhoneInput />

          {
            verificationCode &&
            <>
              <VerticalSpace h={4} />

              <OtpInput
                numberOfDigits={6}
                focusColor={THEME_LIGHT}
                theme={{
                  containerStyle: { alignSelf: "center" },
                  pinCodeTextStyle: { color: BLACK },
                }}
              />

              <VerticalSpace h={4} />

              <View style={styles.resendCodeContainer}>
                <Text style={styles.notReceiveSMSText}>Didn't receive SMS? </Text>
                <TouchableOpacity>
                  <Text style={styles.resendCodeText}>Resend Code</Text>
                </TouchableOpacity>
              </View>

            </>
          }

          <VerticalSpace h={4} />

          <SolidButton label={verificationCode ? 'Verify' : 'Continue'} onPress={() => setVerificationCode(!verificationCode)} />

        </ScrollView>
      </View>
    </Modal>
  );
}

export default LoginModal

const styles = StyleSheet.create({
  modal: { margin: 0 },
  rootContainer: { backgroundColor: WHITE, flex: 1, paddingHorizontal: wR * 4, paddingVertical: hR * 4 },
  headingText: { fontSize: sR * 3, color: THEME_LIGHT },
  messageText: { color: BLACK, fontSize: sR * 1.6 },
  resendCodeContainer: { flexDirection: "row", alignItems: "center" },
  notReceiveSMSText: { color: BLACK, fontSize: sR * 1.2 },
  resendCodeText: { color: THEME_LIGHT, fontSize: sR * 1.4, fontWeight: "600" }
})