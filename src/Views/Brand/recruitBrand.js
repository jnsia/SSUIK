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
import Icon from 'react-native-vector-icons/Entypo';

import testDB from '../../testDB.json';
import {Dropdown} from 'react-native-element-dropdown';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const option_data = [
  {
    value: 'normal',
    lable: '기본순',
  },
  {
    value: 'close',
    lable: '가까운순',
  },
  {
    value: 'point',
    lable: '포인트\n높은순',
  },
];

const location_data = [
  {
    value: 'seoul',
    lable: '서울',
  },
  {
    value: 'gyunggi',
    lable: '경기',
  },
  {
    value: 'daegu',
    lable: '대구',
  },
];

const etc_data = [
  {
    value: 'etc',
    lable: '기타',
  },
  {
    value: '2',
    lable: 'Item 2',
  },
  {
    value: '3',
    lable: 'Item 3',
  },
];

const Brand = ({navigation: {navigate}}) => {
  const brands = testDB.brand;

  const [option, setOption] = useState('기본순');
  const [location, setLocation] = useState('지역');
  const [etc, setEtc] = useState('기타');

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20}}>
        <View style={styles.filter}>
          <Dropdown
            style={{...styles.dropdown, isFocus}}
            selectedTextStyle={{
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
            placeholderStyle={{
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
            itemContainerStyle={{borderRadius: 20}}
            itemTextStyle={{
              fontSize: 10,
              borderRadius: 20,
              textAlign: 'center',
            }}
            containerStyle={{borderRadius: 20}}
            maxHeight={200}
            value={option}
            data={option_data}
            valueField="value"
            labelField="lable"
            placeholder="기본순"
            onChange={e => {
              setOption(e.value);
            }}
          />
          <Dropdown
            style={{...styles.dropdown, isFocus}}
            selectedTextStyle={{
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
            placeholderStyle={{
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
            itemContainerStyle={{borderRadius: 20}}
            itemTextStyle={{
              fontSize: 10,
              borderRadius: 20,
              textAlign: 'center',
            }}
            containerStyle={{borderRadius: 20}}
            maxHeight={200}
            value={location}
            data={location_data}
            valueField="value"
            labelField="lable"
            placeholder="지역"
            onChange={e => {
              setLocation(e.value);
            }}
          />
          <Dropdown
            style={{...styles.dropdown, isFocus}}
            selectedTextStyle={{
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
            placeholderStyle={{
              fontSize: 10,
              color: 'white',
              textAlign: 'center',
            }}
            itemContainerStyle={{borderRadius: 20}}
            itemTextStyle={{
              fontSize: 10,
              borderRadius: 20,
              textAlign: 'center',
            }}
            containerStyle={{borderRadius: 20}}
            maxHeight={200}
            value={etc}
            data={etc_data}
            valueField="value"
            labelField="lable"
            placeholder="기타"
            onChange={e => {
              setEtc(e.value);
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
                  <Icon
                    name="heart"
                    color={'red'}
                    size={25}
                    style={{
                      position: 'absolute',
                      zIndex: 2,
                      top: (SCREEN_WIDTH - 160) / 2,
                      left: (SCREEN_WIDTH - 160) / 2,
                    }}
                  />
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
    paddingTop: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  dropdown: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: 'white',
    borderRadius: 20,
    width: 80,
    height: 40,
  },
});

export default Brand;
