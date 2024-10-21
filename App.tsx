import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <Toast />
    </NavigationContainer>
  );
}
