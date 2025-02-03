import { StyleSheet, Text, View ,Linking } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Designers Blogs !</Text>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
      },
})