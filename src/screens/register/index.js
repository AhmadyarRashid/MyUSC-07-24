import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {qrUrl} from '../../constants/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InputField = ({
  label,
  placeholder,
  maxLength,
  keyboardType,
  onChangeText,
  value,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      maxLength={maxLength}
      value={value}
    />
  </View>
);

function RegisterScreen() {
  const navigation = useNavigation();

  const [phone, setPhone] = useState(null);
  const [cnic, setCNIC] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${qrUrl}/user/auth`, {
        mobile_no: phone,
        cnic: cnic,
      });
      await AsyncStorage.setItem('token', response.data.result);

      navigation.navigate('accountVerificationSuccess')
    } catch (err) {
      // console.log(JSON.stringify(err.response?.data || err.message, null, 2));
    }
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
          <Text style={styles.title}>REGISTER</Text>
        </View>
        <ScrollView>
          <View style={styles.main}>
            <InputField
              label="Phone"
              placeholder="Enter phone"
              maxLength={11}
              keyboardType="numeric"
              onChangeText={text => setPhone(text)}
              value={phone}
            />
            <InputField
              label="CNIC"
              placeholder="Enter CNIC"
              maxLength={13}
              keyboardType="numeric"
              onChangeText={text => setCNIC(text)}
              value={cnic}
            />
            <TouchableOpacity
              style={styles.solidButton}
              accessibilityLabel="Register"
              onPress={handleRegister}>
              <Text style={styles.solidButtonText}>Register</Text>
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
    fontSize: 30,
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
  inputContainer: {
    marginBottom: '8%',
  },
  inputLabel: {
    fontSize: 16,
    color: 'black',
    marginBottom: '2%',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 22,
    borderColor: '#81BB50',
    fontSize: 14,
    color: 'gray',
  },
  solidButton: {
    backgroundColor: '#F48423',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '4%',
  },
  solidButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default RegisterScreen;
