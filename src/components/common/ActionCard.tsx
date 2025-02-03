import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Designers Blogs !</Text>
      <View>
      <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.headerText}>
            How to make vlog in indian market ?
          </Text>
          <Image
            source={{uri: 'https://i.ytimg.com/vi/5S96krw06J4/hqdefault.jpg'}}
            style={styles.cardImage}
          />
         <View style={styles.bodyContainer}>
         <Text numberOfLines={3}>
            Ever since I was a kid I had this dream of travelling to London in
            my own car. It looked liked an impossible dream to 16 year old
            Raunaq but today, after years of hard work we have managed to come
            this far. Let the preperation season begin! Because we head to on a
            solo road trip to London, starting August 2025.
          </Text>
         </View>
         <View style={styles.bodyFooter}>
            <TouchableOpacity onPress={()=>openWebsite("https://preorder.melodiesofindia.com/")}>
              <Text style={styles.button}>
                Read more
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite("https://www.instagram.com/monkeyxmagic/?hl=en")}>
              <Text style={styles.button}>
                Follow me
              </Text>
            </TouchableOpacity>
         </View>
      </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  card: {
    width: 360,
    borderWidth : 0.5 ,
    margin:20,
    padding : 18,
    borderRadius : 10
  },
  elevatedCard: {},
  headingContainer: {
  },
  headerText: {
    fontSize : 20,
    fontWeight : 600,
    paddingBottom: 5
  },
  cardImage: {
    height: 180,
    borderRadius : 10
  },
  bodyContainer: {
    margin: 20
  },
  bodyFooter : {
    flex: 1,
    flexDirection : "row",
    justifyContent : "center",
    marginHorizontal : 50,
    gap : 10,
    alignItems : "center"
  },
  button:{
    backgroundColor : "#ebb60a",
    paddingHorizontal : 10,
    paddingVertical : 5,
    borderRadius : 5,
    color: "white"
    }
});
