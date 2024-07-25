import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import VerticalSpace from "../../verticalSpace";

import { BLACK, FLINT_STONE_LIGHT, THEME_LIGHT, WHITE } from "../../../constants/colors";
import { hR, sR, wR } from "../../../constants/dimensions";

const OrderCard = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.rootContainer} onPress={onPress}>
            <View style={styles.primaryDetails}>
                <Text style={styles.orderNumberText}>Order#: 99012</Text>
                <Text style={styles.orderStatusText}>Delivered</Text>
            </View>
            <Text style={styles.orderTimestampText}>20-DEC-2024, 3:00 PM</Text>
            <Text style={styles.orderAmountText}>PKR 2,000</Text>

            <VerticalSpace h={2} />

            <Text style={styles.estimatedDeliveryText}>Est. delivery on 25-DEC-2024</Text>
        </TouchableOpacity>
    );
};

export default OrderCard;

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: wR * 4,
        paddingVertical: hR * 2,
        marginVertical: hR,
        marginHorizontal: wR * 2,
        backgroundColor: WHITE,
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
    primaryDetails: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    orderNumberText: {
        color: BLACK,
        fontSize: sR * 1.6,
        fontWeight: "500",
    },
    orderStatusText: {
        color: THEME_LIGHT,
    },
    orderTimestampText: {
        color: FLINT_STONE_LIGHT,
        fontSize: sR * 1.3,
    },
    orderAmountText: {
        color: FLINT_STONE_LIGHT,
        fontSize: sR * 1.3,
    },
    estimatedDeliveryText: {
        color: THEME_LIGHT,
        fontSize: sR * 1.4,
        fontWeight: "600",
    },
});
