import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';

const AppLoad = () => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
        App-Loader
      </Text>
    </View>
  );
};

export default AppLoad;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: 'red',
    fontSize : 45
  },
  whiteText: {
    color: 'green',
    fontSize : 60
  },
});
