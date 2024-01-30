import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarItem from './src/src/componets/CarItem'

const App = () => {
  return (
    // <ScrollView style={styles.scrolViewTest}>
    <View style={styles.container}>
      {/* <View style={styles.txtcon}>
      <View style={styles.profile}></View>
      <Text style={styles.txtName}>Name: Zakria</Text>
      <Text style={styles.txtBd}>Birthday: 2/1/2004</Text>
      <Text style={styles.txtUi}>My First Ui</Text>
      </View> */}
    <CarItem></CarItem>
    </View>
    // </ScrollView>
  )
}
export
 default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCF2F1',   
  },
  txtcon: {
     borderWidth: 1,
     width: 350,
     height: 200,
     borderColor: '#3652AD',
     backgroundColor: '#7FC7D9',
     borderRadius: 8,
  },
  profile: {
    borderWidth: 1,
    width: 60,
    height: 60,
    position: 'absolute',
    top: 30,
    left: 20,
    borderRadius: 5,
    backgroundColor: '#365486'
  },
  txtName: {
    textAlign: 'center',
    marginTop: 30,
    left: 35,
    fontSize: 16,
  },
  txtBd: {
    textAlign: 'center',
    marginTop: 20,
    left: 40,
    fontSize: 16,
  },
  txtUi: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 20,
    fontWeight: '600',
    color: '#3652AD',
  },
  scrolViewTest: {

  },
})