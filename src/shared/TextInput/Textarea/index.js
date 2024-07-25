import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { hR,sR,wR } from "../../../constants/dimensions";
import { BLACK, FLINT_STONE_LIGHT, PINBALL } from "../../../constants/colors";

const Textarea = ({ placeholder, onChangeText, onBlur, value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      multiline={true}
      numberOfLines={6}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      autoCapitalize={"none"}
      placeholderTextColor={FLINT_STONE_LIGHT}
    />
  );
};

export default Textarea;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1.2,
    paddingHorizontal: wR * 4,
    paddingTop: hR * 2,
    borderRadius: sR,
    fontSize: sR * 1.1,
    height: 160,
    borderColor: PINBALL,
    textAlignVertical: "top",
    color:BLACK
  },
});
