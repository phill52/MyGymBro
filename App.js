import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './components/WelcomePage/Welcome';
import LoginPage from './components/LoginPage/Login'
export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage/>
      <StatusBar style="auto" />
    </View>
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
