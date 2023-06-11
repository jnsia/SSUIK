import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 사용자 정보 route로 받아오기
const BrandApply = ({navigation: {navigate}, route}) => {
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
      <View style={{marginHorizontal: 30, marginTop: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>신청광고물 정보</Text>
      </View>
      <View
        style={{
          padding: 10,
          margin: 20,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            width: '50%',
            height: 100,
            resizeMode: 'contain',
          }}
          source={require('../../Images/brand-img-test.png')}
        />
        <View style={{justifyContent: 'center', padding: 10}}>
          <Text style={{fontWeight: 'bold'}}>광고 소재 (내지)</Text>
          <Text>SSUIK</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 30, marginTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>배송지 정보</Text>
          <TouchableOpacity style={{}} onPress={() => navigate('Brand')}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>변경</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.adsInfo}>
            <Text style={styles.adsInfoTitle}>수령인</Text>
            <Text style={styles.adsInfoText}>{route.params.title}</Text>
          </View>
          <View style={styles.adsInfo}>
            <Text style={styles.adsInfoTitle}>연락처</Text>
            <Text style={styles.adsInfoText}>{route.params.title}</Text>
          </View>
          <View style={styles.adsInfo}>
            <Text style={styles.adsInfoTitle}>배송지</Text>
            <Text style={styles.adsInfoText}>{route.params.location}</Text>
          </View>
          <View style={styles.adsInfo}>
            <Text style={styles.adsInfoTitle}>상세주소</Text>
            <Text
              style={{
                flex: 1.5,
                fontSize: 16,
                color: 'coral',
                fontWeight: 'bold',
              }}>
              {route.params.reward.toLocaleString('ko-KR')} 포인트 적립
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.adsApplyBtn}
        onPress={() => setBrandApply(brandInfo)}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>신청하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  adsInfo: {
    padding: 10,
    flexDirection: 'row',
  },
  adsInfoTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  adsInfoText: {
    flex: 1.5,
    fontSize: 16,
  },
  adsApplyBtn: {
    backgroundColor: '#FF9500',
    marginVertical: 20,
    marginHorizontal: 40,
    borderRadius: 10,
    padding: 5,
  },
});

export default BrandApply;
