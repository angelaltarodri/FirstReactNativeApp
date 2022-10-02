import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app, Angel!</Text>
        <StatusBar style="auto" /> 
        <Saludar firstname="Margorie" lastname="Mendoza" />
        <Saludar firstname="Margorie" lastname={2} />
        <Saludar firstname="Axler" lastname="Lab"/>
      </View> */}
      {/* <NavigationStack/> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
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
