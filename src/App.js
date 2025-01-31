import {StyleSheet, Text, SafeAreaView, ScrollView ,View} from 'react-native';
import React from 'react';
import Flatlist from './components/common/FlatCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerBox}>
          <Text style={styles.text}>React-Native CLI</Text>
          <Flatlist />
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.text}>React-Native CLI</Text>
          <Flatlist />
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.text}>React-Native CLI</Text>
          <Flatlist />
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.text}>React-Native CLI</Text>
          <Flatlist />
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.text}>React-Native CLI</Text>
          <Flatlist />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : "rgb(17, 20, 39)",
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
    color: '#F88319',
    marginBottom : 10,
    padding : 18,
    textAlign : "center"
  },
  containerBox:{
    margin: 30
  }
});
