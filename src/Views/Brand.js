import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import BrandItem from '../Components/BrandItem';

const Brand = () => {
  return (
    <View style={[styles.container]}>
      <ScrollView>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
        <BrandItem name="히히"></BrandItem>
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
