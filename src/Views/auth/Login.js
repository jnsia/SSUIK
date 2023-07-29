import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  BackHandler,
  Modal,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';

import LogoImage from '../../Images/logo.jpg';
import brandSample1 from '../../Images/kakaotalk.png';
import brandSample2 from '../../Images/brandSample2.png';
import brandSample3 from '../../Images/brandSample3.png';
import {useFocusEffect} from '@react-navigation/native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');
  const [permission, setPermission] = useState(false);

  const getPermission = async () => {
    try {
      const location = await AsyncStorage.getItem('@location');

      if (location === null) {
        setPermission(false);
      } else {
        setPermission(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const setLocation = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@location', jsonValue);

      console.log(jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          return true;
        },
      );

      return () => backHandler.remove();
    }
  }, []);

  useFocusEffect(() => {
    getPermission();
  });

  let loginInfo = {
    userID: userID,
    userPW: userPW,
  };

  const storeLogin = async value => {
    if (userID === '') {
      return Alert.alert('로그인', '아이디를 입력해 주세요.');
    }

    if (userPW === '') {
      return Alert.alert('로그인', '비밀번호를 입력해 주세요.');
    }

    try {
      const isLogin = JSON.stringify(value);
      await AsyncStorage.setItem('@isLogin', isLogin);
      console.log(isLogin);
    } catch (e) {
      console.log('set error');
    }

    axios
      .post('http://localhost:8001/auth/login', {
        email: userID,
        password: userPW,
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    setuserID('');
    setuserPW('');

    navigation.push('Main');
  };

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20, justifyContent: 'center', flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={LogoImage}
            resizeMode={'contain'}
            style={{width: '70%', height: 250}}
          />
        </View>
        <View>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            returnKeyType="next"
            placeholder="이메일"
            value={userID}
            onChangeText={setuserID}
          />
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="비밀번호"
            value={userPW}
            onChangeText={setuserPW}
            secureTextEntry
          />
          <Text
            style={{color: 'grey', fontSize: 12, paddingLeft: 10}}
            onPress={() => navigation.push('SearchUserInfo')}>
            이메일/비밀번호 찾기
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginBottom: 40,
              marginTop: 120,
            }}>
            <Image
              source={brandSample1}
              style={styles.linkageImage}
              resizeMode="contain"
            />
            <Image source={brandSample2} style={styles.linkageImage} />
            <Image source={brandSample3} style={styles.linkageImage} />
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => storeLogin(loginInfo)}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '500',
                color: 'white',
              }}>
              로그인
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: 'grey', paddingRight: 10, fontSize: 13}}>
              계정이 없으신가요?
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 'bold',
                color: '#FFD500',
              }}
              onPress={() => navigation.push('Resister')}>
              가입하기
            </Text>
          </View>
        </View>
      </View>
      <Modal visible={!permission} transparent={true}>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 30,
            marginVertical: 100,
            paddingVertical: 30,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 24,
              paddingHorizontal: 10,
            }}>
            접근 권한 허용
          </Text>
          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 10,
              marginBottom: 40,
            }}>
            <Text style={{fontSize: 13, color: 'black'}}>
              SSUIK은 앱이 종료되어있거나
            </Text>
            <Text style={{fontSize: 13, color: 'black'}}>
              사용 중이 아닐 때도 위치 데이터를
            </Text>
            <Text style={{fontSize: 13, color: 'black'}}>
              수집하며, 광고를 지원할 때도 사용합니다.
            </Text>
          </View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            필수 접근 권한
          </Text>
          <View style={styles.modalPermission}>
            <View style={{padding: 20, flex: 1}}>
              <Icon name="location" size={40} />
            </View>
            <View style={{padding: 20, borderRadius: 10, flex: 4}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                위치
              </Text>
              <Text style={{fontSize: 14}}>현 위치 표시 및 데이터 수집</Text>
            </View>
          </View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            선택 접근 권한
          </Text>
          <View style={styles.modalPermission}>
            <View style={{padding: 20, flex: 1}}>
              <Icon name="camera" size={40} />
            </View>
            <View style={{padding: 20, borderRadius: 10, flex: 4}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                카메라
              </Text>
              <Text style={{fontSize: 14}}>카메라 사용 및 사진 촬영</Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 12}}>
              *선택 접근 권한은 허용하지 않아도 해당 기능 외 서비스 이용이
              가능합니다.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              ]);

              setPermission(true);

              Geolocation.getCurrentPosition(
                position => {
                  console.log(position);

                  setLocation(position);
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
                fontSize: 14,
                color: 'white',
              }}>
              시작하기
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: SCREEN_HEIGHT,
  },
  input: {
    width: '100%',
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 20,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  linkageImage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  loginBtn: {
    padding: 15,
    backgroundColor: '#FFD500',
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  modalPermission: {
    backgroundColor: '#F9F9F9',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#FFD500',
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default Login;
