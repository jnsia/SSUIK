import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import testDB from '../../testDB.json';

const Brand = ({navigation: {navigate}}) => {
  const brands = testDB.brand;

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
        {brands.map((brand, index) => (
          <TouchableOpacity
            key={index}
            style={styles.brand}
            onPress={() => navigate('BrandInfo', brand)}>
            <Image
              style={{
                padding: 5,
                width: '20%',
                height: '100%',
                resizeMode: 'contain',
              }}
              source={require('../../Images/brand-img-test.png')}
            />
            <View
              style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
              <View style={styles.brandInfo}>
                <Text style={[styles.title]}>{brand.title}</Text>
                <Text style={[styles.title]}>
                  ({brand.currentVolume + '/' + brand.maxVolume})
                </Text>
              </View>
              <View style={styles.brandInfo}>
                <Text style={[styles.text]}>{brand.location}</Text>
                <Text style={[styles.text]}>{brand.target}</Text>
                <Text style={[styles.text]}>{brand.deadline}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  brand: {
    width: '100%',
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  brandInfo: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  text: {
    marginRight: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default Brand;
