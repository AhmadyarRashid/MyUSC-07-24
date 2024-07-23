import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { Back } from "iconsax-react-native";

import PhoneInput from "../../phoneInput";
import SolidButton from "../../buttons/solidButton";

import { BLACK, THEME_DARK, THEME_LIGHT, WHITE } from "../../../constants/colors";
import { hR, sR, wR } from "../../../constants/dimensions";
import VerticalSpace from "../../verticalSpace";

function LoginModal({ }) {
  return (
    <Modal isVisible={true} style={{ margin: 0 }}>
      <View style={{ backgroundColor: WHITE, flex: 1, paddingHorizontal: wR * 4, paddingVertical: hR * 4 }}>
       <Back size={sR * 4} color={THEME_DARK} variant={'Bold'} />

       <VerticalSpace h={4} />

        <Text style={{ fontSize: sR * 3, color: THEME_LIGHT, lineHeight: sR * 4 }}>What is{'\n'}your phone number?</Text>
        
        <VerticalSpace h={4} />

        <Text style={{ color: BLACK, fontSize: sR * 1.6 }}>Tap "Continue" to get an SMS confirmation to help you use MyUSC. We would like your phone number."</Text>
        
        <VerticalSpace h={4} />

        <PhoneInput />

        <VerticalSpace h={4} />

        <SolidButton label={'Continue'} />
      </View>
    </Modal>
  );
}

export default LoginModal