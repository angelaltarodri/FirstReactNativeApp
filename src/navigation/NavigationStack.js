import { View, Text, Settings } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './../screens/HomeScreen';
import SettingsScreen from './../screens/SettingsScreen';

const Stack = createNativeStackNavigator()

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}