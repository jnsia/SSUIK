import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const BrandInfo = ({route}) => {
  console.log(route.params);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={{fontSize: 150}}>{route.params.title}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BrandInfo;
