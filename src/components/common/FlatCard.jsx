// Filename - App.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatCard = () => {
  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Welcome To Geeksforgeeks!!</Text>
          <Text style={styles.subtitle}>React Native Card</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.text}>
            A Computer Science portal for geeks. It contains well written, well
            thought and well explained computer science and programming articles
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 10,
  },
  card: {
    backgroundColor: '#0F52BA',
    borderRadius: 15,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 24,
    color: '#CCCCFF',
    marginTop: 10,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: '#581845',
    textAlign: 'center',
  },
});

export default FlatCard;
