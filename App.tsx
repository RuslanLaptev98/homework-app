import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import HomeScreen from './src/screens/Home.screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter/static/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter/static/Inter-Medium.ttf'),
  });

  return (
    <Provider store={store}>
      <View>
        <StatusBar style='auto' />
        {fontsLoaded ? <HomeScreen /> : <Text>Loading...</Text>}
      </View>
    </Provider>
  );
}
