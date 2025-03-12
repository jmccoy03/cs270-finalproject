import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// import { Themes } from "./assets/Themes"
import Header from "./components/header"
import Body from "./components/body"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14382e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
