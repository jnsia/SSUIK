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
            height: 100,
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
              source={require('../../Images/ssuik-logo.png')}
            />
            <View
              style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
              <View style={styles.brandInfo}>
                <Text style={[styles.title]}>{brand.title}</Text>
                <Text style={[styles.title]}>
                  {brand.reward.toLocaleString('ko-KR')}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.title]}>
                    ({brand.currentVolume + '/' + brand.maxVolume})
                  </Text>
                  <Text style={[styles.title]}>{brand.period}일</Text>
                </View>
              </View>
              <View style={styles.brandInfo}>
                {brand.location.length === 1 ? (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.text]}>{brand.location[0]}</Text>
                  </View>
                ) : (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.text]}>{brand.location[0]}</Text>
                    <Text style={[styles.text]}>{brand.location[1]}</Text>
                  </View>
                )}
                {/* <Text style={[styles.text]}>{brand.target}</Text> */}
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
    paddingVertical: 15,
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
    // flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  text: {
    marginRight: 5,
    marginTop: 5,
    // padding: 5,
    paddingHorizontal: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 12,
  },
});

export default Brand;
