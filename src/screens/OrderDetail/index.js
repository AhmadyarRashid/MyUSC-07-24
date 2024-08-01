import { ScrollView, StyleSheet, Text, View } from "react-native"

import PrimaryHeader from "../../shared/Header/PrimaryHeader"
import VerticalSpace from "../../shared/verticalSpace"
import SolidButton from "../../shared/buttons/solidButton"
import ComplaintModal from "../../shared/modals/ComplaintModal"
import FeedbackModal from "../../shared/modals/FeedbackModal"
import Receipt from "../../shared/Receipt"

import { BLACK, FLINT_STONE_LIGHT, JASPER_CANE, THEME_LIGHT, WHITE } from "../../constants/colors"
import { hR, sR, wR } from "../../constants/dimensions"
import useToggle from "../../hooks/useToggle"

const ORDER_DETAILS = [
    {
        label: "Order#",
        value: "123456789"
    },
    {
        label: "Status",
        value: "Delivered"
    },
    {
        label: "Amount",
        value: "PKR 2,100"
    },
    {
        label: "Order Placed",
        value: "13-DEC-2023"
    },
    {
        label: "Arrival Date",
        value: "12-JUN-2024",
    }
]

const PRODUCT_DETAILS = [
    {
        label: "Total Products",
        value: "2"
    },
    {
        label: "Product 1 (Atta)",
        value: "Qty 2"
    },
    {
        label: "Product 2 (Oil)",
        value: "Qty 5"
    },
    {
        label: "GST 5%",
        value: "120 PKR"
    },
    {
        label: "Total Amount",
        value: "2,100 PKR"
    },
    {
        label: "Cash",
        value: "2,500 PKR"
    },
    {
        label: "Remaining",
        value: "400 PKR"
    },
]

const OrderDetailScreen = () => {

    const [complaintModal, toggleComplaintModal] = useToggle(false)
    const [feedbackModal, toggleFeedbackModal] = useToggle(false)

    return (
        <View style={styles.rootContainer}>
            <ComplaintModal isVisible={complaintModal} onCloseModal={toggleComplaintModal} />

            <FeedbackModal isVisible={feedbackModal} onCloseModal={toggleFeedbackModal} />

            <PrimaryHeader />

            <ScrollView keyboardShouldPersistTaps={'always'} automaticallyAdjustKeyboardInsets={true}>
                <VerticalSpace h={4} />

                <Text style={styles.headingText}>Order Details</Text>

                <VerticalSpace h={4} />

                {
                    ORDER_DETAILS.map((item, index) =>
                        <View style={styles.orderDetailsContainer} key={index}>
                            <View style={styles.individualCellOrder}>
                                <Text style={styles.labelText}>{item.label}</Text>
                            </View>
                            <View style={styles.individualCellOrder}>
                                <Text style={styles.valueText}>{item.value}</Text>
                            </View>
                        </View>)
                }

                <VerticalSpace h={4} />

                <Text style={styles.headingText}>Product Details</Text>

                <VerticalSpace h={4} />

                <Receipt />

                <VerticalSpace h={4} />

                <SolidButton label={`Register Complaint`} customLabelStyle={{ fontSize: sR * 1.2 }} onPress={toggleComplaintModal} />

                <VerticalSpace h={4} />

                <SolidButton label={`Feedback`} customLabelStyle={{ fontSize: sR * 1.2 }} onPress={toggleFeedbackModal} />

            </ScrollView>
        </View>
    )
}

export default OrderDetailScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: WHITE,
        paddingHorizontal: wR * 4
    },
    orderDetailsContainer: { flexDirection: "row", alignItems: "flex-start", paddingVertical: hR },
    individualCellOrder: { width: "50%" },
    labelText: { color: BLACK, fontSize: sR * 1.4, fontWeight: "600" },
    valueText: { color: FLINT_STONE_LIGHT, fontSize: sR * 1.2 },
    headingText: { color: THEME_LIGHT, fontSize: sR * 1.4, fontWeight: '600' },
})