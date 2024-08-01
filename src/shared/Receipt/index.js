import { StyleSheet, Text, View } from "react-native"

import { hR, sR } from "../../constants/dimensions"
import { BLACK, FLINT_STONE_LIGHT, PINBALL, WHITE, WHITE_SMOKE } from "../../constants/colors"
import VerticalSpace from "../verticalSpace"

const DATA = [
    {
        sr: 'sr#',
        name: 'name',
        qty: 'qty',
        price: 'price(pkr)'
    },
    {
        sr: '1',
        name: 'Chakki Atta',
        qty: '2',
        price: '3000'
    },
    {
        sr: '2',
        name: 'Cooking Oil Dalda',
        qty: '5',
        price: '5000'
    },
    {
        sr: '3',
        name: 'Soap',
        qty: '2',
        price: '220'
    },
]

const RECEIPT_TOTAL = [
    {
        label: 'GST(5%): ',
        value: '800 PKR'
    },
    {
        label: 'Discount: ',
        value: '200 PKR'
    },
    {
        label: 'Total Items: ',
        value: '12'
    },
    {
        label: 'Total: ',
        value: '5,800 PKR'
    }
]

const Receipt = () => {
    return (
        <View>
            {
                DATA.map((item, index) => <View style={{ ...styles.rootContainer, backgroundColor: index % 2 !== 0 ? WHITE : WHITE_SMOKE }} key={index}>
                    <View style={styles.receiptCell}>
                        <Text style={styles.serialText}>{item.sr}</Text>
                    </View>
                    <View style={styles.receiptCell}>
                        <Text style={styles.nameText}>{item.name}</Text>
                    </View>
                    <View style={styles.receiptCell}>
                        <Text style={styles.quantityText}>{item.qty}</Text>
                    </View>
                    <View style={styles.receiptCell}>
                        <Text style={styles.amountText}>{item.price}</Text>
                    </View>
                </View>)
            }

            <VerticalSpace h={4} />

            <View style={styles.receiptTotalContainer}>
                {
                    RECEIPT_TOTAL.map((item, index) => <View style={styles.receiptTotalItemContainer} key={index}>
                        <Text style={styles.receiptTotalItemLabelText}>{item.label}</Text>
                        <Text style={styles.receiptTotalItemValueText}>{item.value}</Text>
                    </View>)
                }
            </View>
        </View>
    )
}

export default Receipt

const styles = StyleSheet.create({
    rootContainer: { flexDirection: "row", alignItems: "flex-start", paddingVertical: hR },
    receiptCell: { width: "25%" },
    serialText: { color: BLACK, fontSize: sR * 1.4, fontWeight: "600" },
    nameText: { color: FLINT_STONE_LIGHT, fontSize: sR * 1.2 },
    quantityText: { color: FLINT_STONE_LIGHT, fontSize: sR * 1.2 },
    amountText: { color: FLINT_STONE_LIGHT, fontSize: sR * 1.2 },
    receiptTotalContainer: { alignSelf: 'flex-end' },
    receiptTotalItemContainer: { flexDirection: 'row', alignItems: 'center' },
    receiptTotalItemLabelText: { color: BLACK, fontWeight: "600", fontSize: sR * 1.6 },
    receiptTotalItemValueText: { color: FLINT_STONE_LIGHT, fontSize: sR * 1.6 }
})