import { FlatList, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react"

import LoginModal from "../../shared/modals/loginModal"
import PrimaryHeader from "../../shared/Header/PrimaryHeader"
import VerticalSpace from "../../shared/verticalSpace"
import OrderCard from "../../shared/Cards/OrderCard"

import useToggle from "../../hooks/useToggle"
import { THEME_LIGHT, WHITE } from "../../constants/colors"
import { sR, wR } from "../../constants/dimensions"

function OnlineShoppingScreen() {

    const [displayLoginModal, toggleLoginModal] = useToggle(true)
    const navigation = useNavigation()

    const goToOrderDetail = useCallback(() => {
        navigation.navigate(`OrderDetail`);
      }, [navigation]);

    return (
        <View style={styles.rootContainer}>
            <LoginModal isVisible={displayLoginModal} onCloseModal={toggleLoginModal} />

            <PrimaryHeader onPress={() => navigation.goBack()} />

            <VerticalSpace h={4} />

            <Text style={styles.screenHeadingText}>My Orders</Text>

            <VerticalSpace h={4} />

            <FlatList renderItem={() => <OrderCard onPress={goToOrderDetail} />} data={[...Array(10)]} />
        </View>)
}

export default OnlineShoppingScreen

const styles = StyleSheet.create({
    rootContainer:{paddingHorizontal:wR*4,flex:1,backgroundColor:WHITE},
    screenHeadingText:{color:THEME_LIGHT,fontSize:sR*2,fontWeight:'600',alignSelf:"center"}
})