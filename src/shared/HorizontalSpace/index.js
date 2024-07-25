import { View } from "react-native";

import { wR } from "../../constants/dimensions";

const HorizontalSpace = ({ w }) => {
    return (
        <View
            style={{
                width: wR * w,
            }}
        />
    );
};

export default HorizontalSpace;
