import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

// 사용자 정보 route로 받아오기
const BrandApply = ({navigation: {navigate}, route}) => {
  const [select, setSelect] = useState('home');
  const [request, setrequest] = useState('본인');

  let brandInfo = {
    brandTitle: route.params.title,
    brandReward: route.params.reward,
    brandPeroid: route.params.period,
  };

  const setBrandApply = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@brandApply', jsonValue);
      navigate('Home');

      console.log(jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{marginHorizontal: 20, marginVertical: 40}}>
          <Text style={{...styles.text, fontWeight: 'bold', fontSize: 18}}>
            배송지
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  ...styles.infoBox,
                  borderColor: select == 'home' ? '#FFC500' : 'white',
                }}
                onPress={() => setSelect('home')}>
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 12,
                    color: select == 'home' ? '#FFC500' : 'white',
                  }}>
                  집
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.infoBox,
                  borderColor: select == 'home' ? 'white' : '#FFC500',
                }}
                onPress={() => setSelect('office')}>
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 12,
                    color: select == 'home' ? 'white' : '#FFC500',
                  }}>
                  직장
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{}} onPress={() => navigate('Brand')}>
              <Text style={{fontSize: 14, ...styles.text, color: '#FFC500'}}>
                배송지 변경
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{...styles.text, fontSize: 16}}>홍길동</Text>
            <View style={{paddingVertical: 20}}>
              <Text style={{...styles.text, color: 'gray'}}>010-2345-6789</Text>
              <Text style={{...styles.text, color: 'gray'}}>
                대구 달서구 호산동로 34길 21-4 행복빌 203호
              </Text>
            </View>
            <View style={styles.picker}>
              <Picker
                selectedValue={request}
                onValueChange={(itemValue, itemIndex) => setrequest(itemValue)}
                placeholder="배송 시 요청사항을 선택해주세요."
                dropdownIconColor="gray"
                selectionColor="gray">
                <Picker.Item
                  style={styles.pickerItem}
                  label="배송 시 요청사항을 선택해주세요."
                  value=""
                />
              </Picker>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 18, ...styles.text, fontWeight: 'bold'}}>
            광고 상품 정보
          </Text>
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Image
              style={{
                width: '100%',
                height: 100,
                resizeMode: 'contain',
                borderRadius: 20,
              }}
              source={require('../../Images/brandSample1.png')}
            />
          </View>
          <View
            style={{flex: 2, paddingHorizontal: 20, justifyContent: 'center'}}>
            <View>
              <Text style={{...styles.text, fontSize: 16}}>
                {route.params.title}
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Text style={{...styles.text, flex: 1}}>광고 소재</Text>
                <Text style={{...styles.text, flex: 1, color: 'gray'}}>
                  내지
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Text style={{...styles.text, flex: 1}}>포인트 혜택</Text>
                <Text style={{...styles.text, flex: 1, color: 'gray'}}>
                  {route.params.reward.toLocaleString('kr')} POINT
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'black',
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={styles.adsApplyBtn}
          onPress={() => setBrandApply(brandInfo)}>
          <Text
            style={{
              ...styles.text,
              color: 'black',
              fontSize: 18,
              textAlign: 'center',
            }}>
            주문하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'Pretendard-regular',
    color: 'white',
  },
  adsInfo: {
    padding: 10,
    flexDirection: 'row',
  },
  infoBox: {
    borderWidth: 0.5,
    borderColor: '#FFC500',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
  },
  picker: {
    justifyContent: 'center',
    borderRadius: 20,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'black',
    height: 30,
  },
  pickerItem: {
    fontSize: 14,
    color: 'gray',
  },
  adsApplyBtn: {
    width: '40%',
    backgroundColor: '#FFC500',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});

export default BrandApply;
