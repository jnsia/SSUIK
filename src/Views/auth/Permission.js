import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CheckBox from 'react-native-bouncy-checkbox';
import Modal from 'react-native-modal';
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Permission = ({navigation}) => {
  const storePermission = async value => {
    if (toggleAll === true) {
      try {
        await AsyncStorage.setItem('@isPermission', value);
        navigation.push('Login');
      } catch (e) {
        console.log('set error');
      }
    } else {
      alert('이용약관을 모두 체크해주세요.');
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{margin: 20}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24}}>
          SSUIK 접근 권한 안내
        </Text>
        <View
          style={{
            paddingVertical: 20,
            marginVertical: 20,
            marginHorizontal: 10,
            borderBottomWidth: 1,
          }}>
          <Text>
            SSUIK은 앱이 종료되었거나 사용 중이 아닐 때도 위치 데이터를
            수집하며, 광고를 지원할 때도 사용합니다.
          </Text>
        </View>
        <Text style={{fontSize: 20}}>필수 접근 권한</Text>
        <View style={styles.modalPermission}>
          <View style={{padding: 20}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>위치</Text>
            <Text style={{fontSize: 14}}>현 위치 표시 및 데이터 수집</Text>
          </View>
          {/* 위치 아이콘 */}
        </View>
        <Text style={{fontSize: 20}}>선택 접근 권한</Text>
        <View style={styles.modalPermission}>
          <View style={{padding: 20}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>카메라 (선택)</Text>
            <Text style={{fontSize: 14}}>카메라 사용</Text>
          </View>
          {/* 카메라 아이콘 */}
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={{color: '#FF9500'}}>
            '선택 접근 권한'은 허용하지 않아도 해당 기능 외 서비스 이용이
            가능합니다.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.push('Login');

            PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              PermissionsAndroid.PERMISSIONS.CAMERA,
            ]);

            Geolocation.getCurrentPosition(
              position => {
                console.log(position);
              },
              error => {
                console.log(error.code, error.message);
              },
              {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                accuracy: 'high',
              },
            );
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: 'white',
            }}>
            시작하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 20,
  },
  modalPermission: {
    backgroundColor: 'lightgrey',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    padding: 15,
    backgroundColor: '#FF9500',
    borderRadius: 30,
    textAlign: 'center',
  },
});

export default Permission;
