import {StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Category !</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
         <Image source={{ uri: "https://media.gq.com/photos/65aea7982f522e04cf8951c6/4:3/w_1024%2Cc_limit/PFWM_AW24_Day5_GQ_CrisFragkou_14.jpg" }}  style={styles.CardImage} />
        </View>
        <View style={[styles.card, styles.cardTwo]}>
        <Image source={{ uri: "https://sc04.alicdn.com/kf/Ha54138508e9e4a4cb4c6a18c92f76acbR.jpg" }}  style={styles.CardImage} />
        </View>
        <View style={[styles.card, styles.cardThree]}>
        <Image source={{ uri: "https://cdn.arabsstock.com/uploads/images/99203/image-99203-follow-up-fashion-beauty-elegance-womens-clothing-accessor-thumbnail.webp" }}  style={styles.CardImage} />
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  CardImage : {
   height : 100,
   width : 115,
   borderRadius : 20,
},
  container: {
    flex : 1,
    flexDirection: 'row',
    padding : 8
  },
  card: {
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius : 20,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#ffff66',
  },
});
