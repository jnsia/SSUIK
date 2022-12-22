import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import BrandItem from '../../Components/BrandItem';

const Brand = () => {
  return (
    <View style={[styles.container]}>
      <ScrollView>
        <View
          style={{
            height: 150,
            backgroundColor: 'aliceblue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>필터 기능</Text>
        </View>
        <BrandItem />
        <BrandItem
          name="삼성"
          volume="21/50"
          location="수원"
          target="자가용"
          time="2022.1.1"
        />
        <BrandItem
          name="코카콜라"
          volume="3/50"
          location="구미"
          target="버스"
          time="2026.6.6"
        />
        <BrandItem
          name="나이키"
          volume="21/50"
          location="LA"
          target="택시"
          time="2022.1.1"
        />
        <BrandItem
          name="교보문고"
          volume="3/9"
          location="대구"
          target="자가용"
          time="2023.3.9"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default Brand;
