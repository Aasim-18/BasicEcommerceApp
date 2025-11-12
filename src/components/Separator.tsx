import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
  return ( 
    <View style={styles.sepaarator}></View>
  )
}

export default Separator

const styles = StyleSheet.create({
    sepaarator: {
        height: 0.8,
        backgroundColor: "#CAD5E2"
    }
})