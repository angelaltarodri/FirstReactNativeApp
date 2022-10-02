import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen({navigation}) {
  const goToPage = (pageName) => {
    navigation.navigate(pageName)
  }
  return (
    <View>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Button onPress={() => goToPage("Home")} title="Ir a Inicio" />
    </View>
  )
}