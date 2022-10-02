import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

export default function HomeScreen(props) {
  console.log(props)
  const {navigation} = props

  const goToPage = (pageName) => {
    navigation.navigate(pageName)
  }
  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={() => goToPage("Settings")} title="Ir a Ajustes" />
    </SafeAreaView>
  )
}