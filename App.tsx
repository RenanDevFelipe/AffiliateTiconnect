import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { InicioScreen } from './src/screens/InicioScreen/Index';
import { styles } from './src/styles/style';

export default function App() {
  return (
    <View>
      <InicioScreen />
      <StatusBar style="auto" />
    </View>
  );
}


