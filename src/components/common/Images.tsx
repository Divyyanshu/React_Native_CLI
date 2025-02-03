import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Images = () => {
  return (
    <View>
      <Text style={styles.headingText}>Weekend Casuals !</Text>
      <ScrollView horizontal>
        <View style={styles.ImageContainer}>
          <Image
            source={{uri: 'https://pbs.twimg.com/media/E7catU6XsAAQLEI.jpg'}}
            style={styles.CardImage}
          />
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={{
              uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/male-fashion-instagram-post-ad-design-template-6879a8cb0edf4e7ea17b5e2f82b16789_screen.jpg?ts=1599336616',
            }}
            style={styles.CardImage}
          />
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={{
              uri: 'https://cdn.create.vista.com/downloads/bd6cf32a-34ed-4568-aa85-53b0e84aa3ea_1024.jpeg',
            }}
            style={styles.CardImage}
          />
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={{
              uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c533f6161919121.63cd6ec9e5e02.jpg',
            }}
            style={styles.CardImage}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  CardImage: {
    height: 400,
    width: 350,
    borderRadius: 10,
    elevation: 4,
  },
  ImageContainer: {
    margin: 14,
  },
});
