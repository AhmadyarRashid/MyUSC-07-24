import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {qrUrl} from '../../constants/url';
import Toast from 'react-native-toast-message';

function QuickResponseCodeScreen() {
  const navigation = useNavigation();

  const [qrData, setQrData] = useState(null);
  const [isDisplayOTP, setIsDisplayOTP] = useState(false);
  const [otp, setOTP] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    verifyOTP();
  }, []);

  const verifyOTP = async () => {
    setIsLoading(true);

    const token = await AsyncStorage.getItem('token');

    console.log('token ',token);
    

    try {
      const response = await axios.get(`${qrUrl}/app/user/otp?platform=app`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        setQrData(response.data.payload.cnic + response.data.payload.otp);
        setIsDisplayOTP(response?.data?.payload?.display_otp ?? false);
        setOTP(response?.data?.payload?.otp ?? null);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'An error occurred';
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: errorMessage,
      });

      clearToken();
    } finally {
      setIsLoading(false);
    }
  };

  const clearToken = async () => {
    await AsyncStorage.removeItem('token');

    navigation.reset({
      index: 0,
      routes: [{name: 'dashboard'}],
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.container}
        source={require('./../../assets/light_background.png')}>
        <View style={styles.controlHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.dashboardIcon}
              source={require('./../../assets/back.png')}
            />
          </TouchableOpacity>
          <Image source={require('./../../assets/logo_plan.png')} />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>SUBSIDY CODE</Text>
        </View>
        <ScrollView>
          <View style={styles.main}>
            <Text style={styles.infoText}>
              Scan your QR code at the counter to get your subsidy.
            </Text>

            <View
              style={{
                marginVertical: '12%',
                alignSelf: 'center',
              }}>
              {qrData !== null && !isLoading ? (
                <QRCode value={qrData} />
              ) : (
                <ActivityIndicator />
              )}
            </View>

            {isDisplayOTP && otp && (
              <View
                style={{
                  marginVertical: '12%',
                  alignSelf: 'center',
                }}>
                <Text>Your OTP is: {otp}</Text>
              </View>
            )}

            <TouchableOpacity
              style={styles.solidButton}
              accessibilityLabel=""
              onPress={verifyOTP}>
              <Text style={styles.solidButtonText}>Regenerate Code</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.solidButton}
              accessibilityLabel=""
              onPress={clearToken}>
              <Text style={styles.solidButtonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  controlHeader: {
    marginTop: '5%',
    marginHorizontal: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dashboardIcon: {
    marginTop: '4%',
    marginLeft: '10%',
  },
  header: {
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#81BB50',
    fontWeight: '900',
    marginLeft: 8,
  },
  main: {
    marginTop: '8%',
    marginBottom: '12%',
    paddingHorizontal: '8%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  solidButton: {
    backgroundColor: '#F48423',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '4%',
    marginBottom: '4%',
  },
  solidButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  infoText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginBottom: '8%',
  },
  textButton: {
    fontSize: 18,
    color: '#81BB50',
    textAlign: 'center',
    marginBottom: '8%',
  },
});

export default QuickResponseCodeScreen;
