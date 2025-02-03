import {ScrollView, StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';

const PromotionCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Styled Here !</Text>
      <ScrollView horizontal={true} style={styles.Container}>
        <View style={[styles.card, styles.cardElevatedOne]}>
          <Image source={{ uri: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/004/413/330/new_medium/240459215_4023151271144179_332682887310123032_n.jpg" }}  style={styles.CardImage} />
        </View>
        <View style={[styles.card, styles.cardElevatedTwo]}>
        <Image source={{ uri: "https://newspaperads.ads2publish.com/wp-content/uploads/2017/12/tissot-watch-this-is-your-time-ad-times-of-india-kolkata-16-12-2017.png" }}  style={styles.CardImage} />
        </View>
        <View style={[styles.card, styles.cardElevatedThree]}>
        <Image source={{ uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bcee4e175735195.64c65b0e7f738.jpg" }}  style={styles.CardImage} />
        </View>
        <View style={[styles.card, styles.cardElevatedFour]}>
        <Image source={{ uri: "https://s7ap1.scene7.com/is/image/adityabirlafashion/SALE-Flat499-OFF-M?resMode=sharp2&wid=360&hei=528" }}  style={styles.CardImage} />
        </View>
        <View style={[styles.card, styles.cardElevatedFour]}>
        <Image source={{ uri: "https://fullyfilmy.in/cdn/shop/files/2_362b0279-0870-4a9c-ad4e-3c02bb05b821.png?v=1721729041" }}  style={styles.CardImage} />
        </View>
        <View style={[styles.card, styles.cardElevatedFour]}>
        <Image source={{ uri: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-11/08/full/20241107164243.jpg" }}  style={styles.CardImage} />
        </View>
        <View style={[styles.card, styles.cardElevatedFour]}>
        <Image source={{ uri: "https://www.indiantelevision.com/sites/default/files/images/tv-images/2022/01/10/peter_england.jpg" }}  style={styles.CardImage} />
        </View>
        <View style={[styles.card, styles.cardElevatedFour]}>
        <Image source={{ uri: "https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_M_HB_SP_StyleStreet_09_24?resMode=sharp2&wid=375&hei=480" }}  style={styles.CardImage} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PromotionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  Container: {
    margin: 10
  },
  card: {
    width: 200,
    height: 250,
    borderRadius : 40,
    elevation : 5,
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    margin : 5
  },
  CardImage : {
    width: 200,
    height: 250,
    borderRadius : 20,
 },
  cardElevatedOne: {
    backgroundColor: '#5DA3FA',
  },
  cardElevatedTwo :{
    backgroundColor: '#ff9966',
  },
  cardElevatedThree :{
    backgroundColor: '#00ff99',
  },
  cardElevatedFour :{
    backgroundColor: '#cc66ff',
  },
  cardElevatedFive :{
    backgroundColor: '#ffffcc',
  },
  cardElevatedSix :{
    backgroundColor: '#ff99cc',
  },
  cardElevatedSeven : {
    backgroundColor: '#B43F3F',
  },
});
