import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import testImage from '../../Images/test.jpg';
import testBrand from '../../Images/testBrand.jpg';
import testBack from '../../Images/testBack.jpg';
import logoImage from '../../Images/ssuik-logo.png';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [carInfo, isCarInfo] = useState(false);
  const [test, isTest] = useState(true);
  const [done, isDone] = useState(false);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      {carInfo ? null : (
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            padding: 20,
            margin: 20,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('ResisterCarInfo');
            isCarInfo(true);
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              color: 'white',
            }}>
            내 차량 및 위치 정보 등록
          </Text>
        </TouchableOpacity>
      )}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        indicatorStyle={{backgroundColor: 'white', color: 'white'}}>
        <ImageBackground
          source={testBack}
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
            onPress={() => navigation.push('BrandStackNavigator')}>
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
          source={testBack}
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
        {test ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ImageBackground
              source={testBack}
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
            <ImageBackground
              source={testImage}
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
        ) : (
          <View
            style={{
              width: 240,
              height: 160,
              borderRadius: 10,
              padding: 15,
              marginVertical: 20,
              marginLeft: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
              }}>
              서포터를 추가해주세요
            </Text>
          </View>
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
              } else {
                isDone(true);
              }
            }}>
            <Image
              source={logoImage}
              resizeMode="contain"
              style={{width: '100%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.recommendADS}
            onPress={() => {
              if (test) {
                isTest(false);
              } else {
                isTest(true);
              }
            }}>
            <Image
              source={testBrand}
              resizeMode="contain"
              style={{width: '100%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.recommendADS}
            onPress={() => isCarInfo(false)}>
            <Image
              source={logoImage}
              resizeMode="contain"
              style={{width: '100%'}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendADS}>
            <Image
              source={testBrand}
              resizeMode="contain"
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
