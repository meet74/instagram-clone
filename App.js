import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import {useFonts} from 'expo-font'

export default function App() {

  const [fontLoaded] = useFonts({
    "SegoiUI":require("./assets/fonts/SegoeUI.ttf"),
    "SegoiUIBold":require("./assets/fonts/SegoeUI-Bold.ttf")
  })

  if (!fontLoaded) {
    return <Text>...Loading Fonts</Text>
  }
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
