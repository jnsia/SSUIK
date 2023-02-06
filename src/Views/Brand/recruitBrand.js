import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

import testDB from '../../testDB.json';
import {Dropdown} from 'react-native-element-dropdown';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Brand = ({navigation: {navigate}}) => {
  const brands = testDB.brand;

  const [option, setOption] = useState('');
  const [location, setLocation] = useState('');
  const [etc, setEtc] = useState('기타');

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20}}>
        <View style={styles.filter}>
          <Dropdown
            style={{...styles.dropdown, isFocus}}
            placeholderStyle={{
              color: 'white',
              fontSize: 12,
              textAlign: 'center',
            }}
            itemContainerStyle={{color: 'black'}}
            itemTextStyle={{color: 'black'}}
            containerStyle={{borderRadius: 20}}
            selectedTextStyle={{color: 'black'}}
            data={data}
            valueField="value"
            placeholder={'기본순'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'black',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: SCREEN_WIDTH - 40,
              justifyContent: 'center',
              paddingBottom: 150,
            }}>
            {brands.map((brand, index) => (
              <TouchableOpacity
                key={index}
                style={styles.brand}
                onPress={() => navigate('BrandInfo', brand)}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 70) / 2,
                      height: (SCREEN_WIDTH - 70) / 2,
                      resizeMode: 'contain',
                      backgroundColor: 'white',
                      borderRadius: 20,
                    }}
                    source={require('../../Images/testBrand.jpg')}
                  />
                </View>
                <View style={styles.brandInfo}>
                  <Text
                    style={{
                      ...styles.text,
                      lineHeight: 30,
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    {brand.title}
                  </Text>
                  {brand.location.length === 1 ? (
                    <View>
                      <Text style={{...styles.text, fontSize: 12}}>
                        {brand.location[0]}
                      </Text>
                    </View>
                  ) : (
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{...styles.text, fontSize: 12}}>
                        {brand.location[0]} / {''}
                      </Text>
                      <Text style={{...styles.text, fontSize: 12}}>
                        {brand.location[1]}
                      </Text>
                    </View>
                  )}
                  <Text
                    style={{...styles.text, fontSize: 12, color: '#FFD500'}}>
                    {brand.reward.toLocaleString('ko-KR')} Point/{brand.period}
                    일
                  </Text>
                  <Text style={{...styles.text, fontSize: 12, color: 'grey'}}>
                    {brand.maxVolume}명 중 {brand.currentVolume}명이 서포트 중
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  brand: {
    width: '50%',
    padding: 10,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  brandInfo: {
    paddingVertical: 10,
    // flex: 1,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  filter: {
    padding: 10,
    marginVertical: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    width: 100,
  },
});

export default Brand;
