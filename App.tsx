import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import Toast from "react-native-toast-message";
import NetworkLogger from 'react-native-network-logger';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <NetworkLogger /> */}
      <Toast />
    </NavigationContainer>
  );
}
