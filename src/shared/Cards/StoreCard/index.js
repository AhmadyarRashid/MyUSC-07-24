import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Star1 } from "iconsax-react-native";

import VerticalSpace from "../../verticalSpace";

import { BLACK, BRILLIANCE, GOLD, JASPER_CANE, PINBALL, THEME_LIGHT, WHITE, WHITE_SMOKE } from "../../../constants/colors";
import { hR, sR, wR } from "../../../constants/dimensions";

const StoreCard = ({ onPress, data,activeMarkerIndex,index }) => {
    return (
        <TouchableOpacity style={{...styles.rootContainer,backgroundColor:activeMarkerIndex === index ? WHITE_SMOKE : WHITE}} onPress={onPress}>
            <Text style={styles.locationText}>{data.location}</Text>

            <View style={styles.ratingContainer}>
                {
                    [...Array(data.rating)].map((item, index) => <Star1 key={index} size={sR * 2} color={GOLD} variant="Bold" />)
                }
            </View>

            <VerticalSpace h={2} />

            <Text style={styles.storeStatusText}>{data.status}</Text>
        </TouchableOpacity>
    );
};

export default StoreCard;

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: wR * 4,
        paddingVertical: hR * 2,
        marginVertical: hR,
        marginHorizontal: wR * 2,
        borderRadius: sR,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    ratingContainer: { flexDirection: 'row' },
    locationText: {
        color: BLACK,
        fontSize: sR * 1.6,
        fontWeight: "500",
    },
    storeStatusText: {
        color: THEME_LIGHT,
        fontSize: sR * 1.4,
        fontWeight: "600",
    },
});
