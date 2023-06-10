import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  BackHandler,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import logoImage from '../../Images/ssuik-logo.png';

import testBack1 from '../../Images/testBack1.jpg';
import testBack2 from '../../Images/testBack2.jpg';

import brandSample1 from '../../Images/brandSample1.png';
import brandSample2 from '../../Images/brandSample2.png';
import brandSample3 from '../../Images/brandSample3.png';
import brandSample4 from '../../Images/brandSample4.jpg';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [addSupport, setAddSupport] = useState(true);
  const [done, isDone] = useState(true);

  const getBrandApply = async () => {
    try {
      const brandApply = await AsyncStorage.getItem('@brandApply');

      if (brandApply === null) {
        setAddSupport(true);
      } else {
        setAddSupport(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getCarInfo = async () => {
    try {
      const isCarInfo = await AsyncStorage.getItem('@carInfo');
      console.log(isCarInfo);
      if (isCarInfo === null) {
        navigation.navigate('ResisterCarInfo');
      } else {
        navigation.navigate('BrandStackNavigator');
      }
      // return isCarInfo != null ? JSON.parse(isCarInfo) : null;
    } catch (e) {
      console.error(e);
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@carInfo');
      await AsyncStorage.removeItem('@brandApply');
      await AsyncStorage.removeItem('@isLogin');
      await AsyncStorage.removeItem('@isPermission');
    } catch (e) {
      console.error(e);
    }

    console.log('Done.');
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
    getBrandApply();
  });

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        indicatorStyle={{backgroundColor: 'white', color: 'white'}}>
        <ImageBackground
          source={testBack2}
          style={{
            width: SCREEN_WIDTH,
            paddingHorizontal: 30,
            marginTop: 40,
            marginBottom: 40,
            paddingTop: 40,
            paddingBottom: 30,
          }}
          imageStyle={{
            borderRadius: 10,
          }}>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontFamily: 'Pretendard-Regular',
                textAlignVertical: 'bottom',
              }}>
              나도 이제부터 브랜드 서포터즈?
            </Text>
          </View>
          <View style={{marginBottom: 80}}>
            <Text style={styles.HomeText}>나의 스폰서를</Text>
            <Text style={styles.HomeText}>찾아주세요</Text>
          </View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => getCarInfo()}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: 'white',
              }}>
              스폰서 찾기
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          source={testBack1}
          style={{
            width: SCREEN_WIDTH,
            paddingHorizontal: 30,
            marginVertical: 40,
            paddingTop: 40,
            paddingBottom: 30,
          }}
          imageStyle={{
            borderRadius: 10,
          }}>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontFamily: 'Pretendard-Regular',
                textAlignVertical: 'bottom',
              }}>
              나도 이제부터 브랜드 서포터즈?
            </Text>
          </View>
          <View style={{marginBottom: 80}}>
            <Text style={styles.HomeText}>나의 스폰서를</Text>
            <Text style={styles.HomeText}>찾아주세요</Text>
          </View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => navigation.push('ResisterCarInfo')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: 'white',
              }}>
              스폰서 찾기
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
      <View style={{marginBottom: 20}}>
        <Text style={{color: 'white', fontSize: 14, marginHorizontal: 20}}>
          설인수님이 진행 중인 광고
        </Text>
        {addSupport ? (
          <TouchableOpacity
            style={{
              width: 240,
              height: 160,
              borderRadius: 10,
              marginVertical: 20,
              marginLeft: 20,
            }}
            onPress={() => navigation.navigate('BrandStackNavigator')}>
            <ImageBackground source={testBack1} resizeMode="contain" style={{}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  textAlign: 'center',
                }}>
                서포터를 추가해주세요
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ImageBackground
              source={testBack2}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              style={styles.processADS}>
              {done ? (
                <View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'Pretendard-Regular',
                      color: 'lightgrey',
                    }}>
                    2023.01.25 ~ 2023.03.23
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: 'Pretendard-Bold',
                      color: '#FFD550',
                    }}>
                    D-21
                  </Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    marginVertical: 5,
                  }}
                  onPress={() => navigation.push('AuthPhoto')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: 'black',
                    }}>
                    완료하고 포인트받기
                  </Text>
                </TouchableOpacity>
              )}
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Pretendard-Bold',
                  color: 'white',
                }}>
                + point 25,000
              </Text>
            </ImageBackground>
            <ImageBackground
              source={brandSample1}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              style={styles.processADS}>
              {done ? (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    marginVertical: 5,
                  }}
                  onPress={() => navigation.push('AuthPhoto')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: 'black',
                    }}>
                    스폰서 인증하기
                  </Text>
                </TouchableOpacity>
              ) : (
                <View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'Pretendard-Regular',
                      color: 'lightgrey',
                    }}>
                    2023.01.25 ~ 2023.03.23
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: 'Pretendard-Bold',
                      color: '#FFD550',
                    }}>
                    D-21
                  </Text>
                </View>
              )}
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Pretendard-Bold',
                  color: 'white',
                }}>
                + point 25,000
              </Text>
            </ImageBackground>
          </ScrollView>
        )}
      </View>
      <View>
        <Text style={{color: 'white', fontSize: 14, marginHorizontal: 20}}>
          설인수님을 위한 추천광고
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginHorizontal: 20}}>
          <TouchableOpacity
            style={styles.recommendADS}
            onPress={() => {
              if (done) {
                isDone(false);
                removeValue();
              } else {
                isDone(true);
              }
            }}>
            <Image
              source={brandSample1}
              resizeMode="contain"
              style={{width: '100%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendADS}>
            <Image
              resizeMode="contain"
              source={brandSample2}
              style={{width: '100%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendADS}>
            <Image
              source={brandSample3}
              resizeMode="contain"
              style={{width: '100%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendADS}>
            <Image
              resizeMode="contain"
              source={brandSample4}
              style={{width: '100%'}}></Image>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchBtn: {
    width: '30%',
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    marginTop: 10,
  },
  HomeText: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'Pretendard-Bold',
    textAlignVertical: 'bottom',
  },
  processADS: {
    width: 240,
    height: 160,
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    marginLeft: 20,
  },
  recommendADS: {
    width: 160,
    height: 160,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ADStext: {
    fontFamily: 'Pretendard-Regular',
    lineHeight: 30,
  },
});

export default Home;
