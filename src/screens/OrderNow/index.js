import { FlatList, View } from "react-native"
import MapView, { Marker } from "react-native-maps"
import useState from 'react-usestateref'
import { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"

import PrimaryHeader from "../../shared/Header/PrimaryHeader"
import VerticalSpace from "../../shared/verticalSpace"
import StoreCard from "../../shared/Cards/StoreCard"
import DecisionModal from "../../shared/modals/DecisionModal"

import { WHITE } from "../../constants/colors"
import { hR, wR } from "../../constants/dimensions"
import useToggle from "../../hooks/useToggle"

const DATA = [
    {
        location: "ATC, G-9 Markaz, Islamabad",
        latitude: 33.690565494581584,
        longitude: 73.03074695970936,
        rating: 5,
        status: "Open"
    },
    {
        location: "G-7 Markaz, Islamabad",
        latitude: 33.70837104366857,
        longitude: 73.06220197780831,
        rating: 2,
        status: "Open"
    }, {
        location: "F-7, Islamabad",
        latitude: 33.716403194714616,
        longitude: 73.05400514683089,
        rating: 4,
        status: "Closed"
    }
]

const OrderNowScreen = () => {

    const [_, setActiveMarkerIndex, activeMarkerIndexRef] = useState(0)

    const [storeConfirmationModal, toggleStoreConfirmationModal] = useToggle(false)
    const navigation = useNavigation()

    const handleActiveMarkerIndex = (index) => {
        setActiveMarkerIndex(index)
    }

    const goToStoreWebview = useCallback(() => {
        navigation.navigate(`StoreWebview`);
    }, [navigation]);


    return <View style={{ flex: 1, backgroundColor: WHITE, paddingHorizontal: wR * 4 }}>
        <PrimaryHeader />

        <DecisionModal
            isVisible={storeConfirmationModal}
            label={`Confirmation!`}
            message={`Would you like to continue buying from this store, or do you want to check out other options?`}
            onCloseModalPress={toggleStoreConfirmationModal}
            leftButtonText={`No`}
            rightButtonText={`Yes!`}
            leftButtonPress={toggleStoreConfirmationModal}
            rightButtonPress={() => {
                toggleStoreConfirmationModal()
                goToStoreWebview()
            }}
        />

        <VerticalSpace h={4} />

        <MapView
            initialRegion={{
                latitude: 33.690565494581584,
                longitude: 73.03074695970936,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            style={{ height: hR * 32, width: wR * 92 }}
        >
            {
                DATA.map((item, index) => <Marker key={index} onPress={() => handleActiveMarkerIndex(index)} coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude
                }} />)
            }
        </MapView>

        <VerticalSpace h={4} />

        <FlatList
            data={DATA}
            renderItem={({ item, index }) => <StoreCard data={item} activeMarkerIndex={activeMarkerIndexRef.current} index={index} onPress={toggleStoreConfirmationModal} />}
        />
    </View>
}
export default OrderNowScreen