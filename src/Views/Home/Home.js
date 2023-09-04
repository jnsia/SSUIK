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
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import logoImage from '../../Images/ssuik-logo.png';

import testBack2 from '../../Images/testBack2.jpg';

import brandSample1 from '../../Images/brandSample1.png';
import brandSample2 from '../../Images/brandSample2.png';
import brandSample3 from '../../Images/brandSample3.png';
import brandSample4 from '../../Images/BadBlue-logo.jpg';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [addSupport, setAddSupport] = useState(true);
  const [done, setDone] = useState(true);
  const [modal, setModal] = useState(false);

  const getBrandApply = async () => {
    try {
      const brandApply = await AsyncStorage.getItem('@brandApply');

      if (brandApply === null) {
        setAddSupport(false);
      } else {
        setAddSupport(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getAuthPhoto = async () => {
    try {
      const authPhoto = await AsyncStorage.getItem('@authPhoto');

      if (authPhoto === null) {
        setDone(false);
      } else {
        setDone(true);
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
        setModal(true);
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
      await AsyncStorage.removeItem('@authPhoto');
      await AsyncStorage.removeItem('@location');
      await AsyncStorage.removeItem('@userAddress');
    } catch (e) {
      console.error(e);
    }

    console.log('Done.');
  };

  useFocusEffect(() => {
    getBrandApply();
    getAuthPhoto();
  });

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        indicatorStyle={{backgroundColor: 'white', color: 'white'}}>
        <ImageBackground
          source={require('../../Images/home-top1.png')}
          style={{
            width: SCREEN_WIDTH,
            paddingHorizontal: 30,
            marginTop: 20,
            marginBottom: 20,
            paddingTop: 40,
            paddingBottom: 20,
          }}
          imageStyle={{
            borderRadius: 10,
          }}>
          <View style={{paddingVertical: 10, marginTop: 20}}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontFamily: 'Pretendard-regular',
                textAlignVertical: 'bottom',
              }}>
              나도 이제부터 브랜드 서포터즈?
            </Text>
          </View>
          <View style={{marginBottom: 40}}>
            <Text style={styles.HomeText}>나의 브랜드 캠페인을</Text>
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
              브랜드 리스트
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          source={require('../../Images/ProAds-left1.png')}
          style={{
            width: SCREEN_WIDTH,
            paddingHorizontal: 30,
            marginTop: 20,
            marginBottom: 20,
            paddingTop: 40,
            paddingBottom: 20,
          }}
          imageStyle={{
            borderRadius: 10,
          }}>
          <View style={{paddingVertical: 10, marginTop: 20}}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontFamily: 'Pretendard-regular',
                textAlignVertical: 'bottom',
              }}>
              나도 이제부터 브랜드 서포터즈?
            </Text>
          </View>
          <View style={{marginBottom: 40}}>
            <Text style={styles.HomeText}>나의 브랜드 캠페인을</Text>
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
              브랜드 리스트
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
      <View style={{marginBottom: 0}}>
        <Text style={{color: 'white', fontSize: 16, marginHorizontal: 20}}>
          설인수님이 진행 중인 브랜드 캠페인
        </Text>
        {addSupport === false ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ImageBackground
              source={require('../../Images/ProAds-left1.png')}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              style={styles.processADS}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 20,
                  padding: 15,
                }}
                onPress={() => getCarInfo()}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                  }}>
                  브랜드 캠페인을
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                  }}>
                  추가해주세요!
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </ScrollView>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {done === false ? (
              <ImageBackground
                source={require('../../Images/ProAds-left1.png')}
                resizeMode="cover"
                imageStyle={{borderRadius: 20}}
                style={styles.processADS}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}
                  onPress={() => navigation.push('AuthPhoto')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 14,
                      color: '#FFC500',
                      lineHeight: 20,
                    }}>
                    인증하면 찐서포터로 임명!
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 12,
                      color: 'white',
                      lineHeight: 20,
                    }}>
                    차량에 붙인 스티커를 인증해주세요.
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            ) : (
              <ImageBackground
                source={require('../../Images/BadBlue-logo.jpg')}
                resizeMode="contain"
                imageStyle={{borderRadius: 20}}
                style={styles.processADS}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: '#FFC500',
                      lineHeight: 20,
                    }}>
                    인증 중...
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 13,
                      color: 'white',
                      lineHeight: 20,
                    }}>
                    조금만 기다려주세요!
                  </Text>
                </View>
              </ImageBackground>
              // <ImageBackground
              //   source={require('../../Images/BadBlue-logo.jpg')}
              //   resizeMode="contain"
              //   imageStyle={{borderRadius: 20}}
              //   style={styles.processADS}>
              //   <View>
              //     <Text
              //       style={{
              //         fontSize: 10,
              //         fontFamily: 'Pretendard-Regular',
              //         color: 'lightgrey',
              //       }}>
              //       2023.01.25 ~ 2023.03.23
              //     </Text>
              //     <Text
              //       style={{
              //         fontSize: 24,
              //         fontFamily: 'Pretendard-Bold',
              //         color: '#FFD550',
              //       }}>
              //       D-21
              //     </Text>
              //     <Text
              //       style={{
              //         fontSize: 14,
              //         fontFamily: 'Pretendard-Bold',
              //         color: 'white',
              //       }}>
              //       + point 25,000
              //     </Text>
              //   </View>
              // </ImageBackground>
            )}
            <ImageBackground
              source={require('../../Images/ProAds-left1.png')}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              style={styles.processADS}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 20,
                  padding: 15,
                }}
                onPress={() => getCarInfo()}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                  }}>
                  브랜드 캠페인을
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                  }}>
                  추가해주세요
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </ScrollView>
        )}
      </View>
      <View>
        <Text style={{color: 'white', fontSize: 16, marginHorizontal: 20}}>
          설인수님을 위한 추천 브랜드
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginHorizontal: 20}}>
          <TouchableOpacity style={styles.recommendADS}>
            <Image
              resizeMode="cover"
              source={brandSample4}
              style={{width: '100%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.recommendADS}
            onPress={() => {
              setDone(false);
              removeValue();
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
        </ScrollView>
      </View>
      <Modal visible={modal} transparent={true} animationType={'fade'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 30,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: 'Pretendard-Bold',
                  fontSize: 16,
                  color: 'black',
                }}>
                차량 정보를 등록해야만
              </Text>
              <Text
                style={{
                  fontFamily: 'Pretendard-Bold',
                  fontSize: 16,
                  color: 'black',
                }}>
                브랜드 캠페인 신청이 가능합니다.
              </Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Text
                style={{
                  fontFamily: 'Pretendard-Bold',
                  fontSize: 16,
                  color: 'black',
                }}>
                진행하시겠습니까?
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  marginHorizontal: 5,
                  borderRadius: 10,
                  backgroundColor: 'black',
                }}
                onPress={() => setModal(false)}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: 'Pretendard',
                  }}>
                  취소
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  marginHorizontal: 5,
                  borderRadius: 10,
                  backgroundColor: 'black',
                }}
                onPress={() => {
                  setModal(false);
                  navigation.navigate('ResisterCarInfo');
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: 'Pretendard',
                  }}>
                  확인
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    width: 220,
    height: 130,
    borderRadius: 10,
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
