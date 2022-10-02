import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

export default function Saludar(props) {
  // const {firstname = "Agustin", lastname="Navarro Galdon"} = props
  const {firstname, lastname} = props;

  return (
    <View>
      <Text>Hola {firstname} {lastname}</Text>
    </View>
  )
}

Saludar.defaultProps = {
  firstname: 'Angel', lastname: 'Altamirano'
}

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string
}