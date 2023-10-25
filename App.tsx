import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/components/redux/store';
import Routes from './Routes';
import { NavigationContainer } from '@react-navigation/native';
import 'expo-dev-client';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>


  );
}


