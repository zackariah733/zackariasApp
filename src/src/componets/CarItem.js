// rnfes shortcut
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CarItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}></View>
      <View>
      <Text style={styles.txtName}>BRAND: </Text>
      <Text style={styles.txtYr}>YEAR: </Text>
      <Text style={styles.txtkM}>KM: </Text>
      <Text style={styles.txtpR}>PRICE: </Text>
      </View>
    </View>
  )
}

export default CarItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  profile: {
    borderWidth: 1,
    width: 60,
    height: 60,
    right: 40,
  }
})