import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FlatCard from './components/common/FlatCard';
import PromotionCard from './components/common/PromotionCard';
import Images from './components/common/Images';
import ElevatedCard from './components/common/ElevatedCard';
import ActionCard from './components/common/ActionCard';

const app = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.mainHeading}>
          <Text style={styles.text}>ShoPPing-hUB</Text>
          </View>
          <FlatCard />
          <PromotionCard />
          <Images/>
          <ElevatedCard/>
          <ActionCard/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default app;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#F8EDED"
  },
  mainHeading :{
    padding : 10,
    justifyContent : "center",
    alignItems : "center"
  },
  text: {
    fontSize: 32,
    fontWeight : 800,
    color: "#4C585B",
  }
});
