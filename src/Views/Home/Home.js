import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 20,
            paddingVertical: 40,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{...styles.HomeText, fontSize: 52}}>SSUIK</Text>
            <Text style={styles.HomeText}>의</Text>
          </View>
          <Text style={styles.HomeText}>스폰서가</Text>
          <Text style={styles.HomeText}>되어주세요</Text>
          <TouchableOpacity
            style={styles.ResisterCarInfoBtn}
            onPress={() => navigation.push('ResisterCarInfo')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: 'black',
                fontFamily: 'BlackHanSans-Regular',
              }}>
              견적 확인하기
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{zIndex: 2, top: -40, marginHorizontal: 20}}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            <View style={styles.adContent}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  resizeMode: 'contain',
                }}
                source={require('../../Images/ssuik-logo.png')}
              />
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 16,
                    fontFamily: 'BlackHanSans-Regular',
                    color: 'black',
                  }}>
                  D-21
                </Text>
                <Text
                  style={{
                    fontSize: 40,
                    color: 'black',
                    fontFamily: 'BlackHanSans-Regular',
                  }}>
                  25,000
                </Text>
              </View>
            </View>
            <View style={styles.adContent}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  resizeMode: 'contain',
                }}
                source={require('../../Images/ssuik-logo.png')}
              />
              <View>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'BlackHanSans-Regular',
                    color: 'black',
                  }}>
                  D-21
                </Text>
                <Text
                  style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>
                  25,000
                </Text>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 20,
              paddingHorizontal: 15,
              paddingVertical: 15,
            }}>
            <Text
              style={{
                marginBottom: 10,
                fontWeight: '500',
                color: 'black',
                fontFamily: 'BlackHanSans-Regular',
                fontSize: 18,
              }}>
              맞춤 추천 광고
            </Text>
            <View style={styles.recommendAds}>
              <Image
                style={{
                  height: 50,
                  width: 100,
                  resizeMode: 'contain',
                }}
                source={require('../../Images/ssuik-logo.png')}
              />
              <View style={styles.recommendAdsText}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.recommendAdsTexts1}>예상수익</Text>
                  <View>
                    <Text style={styles.recommendAdsTexts2}>
                      16,000 ~ 17,000
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.recommendAdsTexts1}>부착기간</Text>
                  <View style={{flex: 1}}>
                    <Text style={styles.recommendAdsTexts2}>23일</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.recommendAds}>
              <Image
                style={{
                  height: 50,
                  width: 100,
                  resizeMode: 'contain',
                }}
                source={require('../../Images/ssuik-logo.png')}
              />
              <View style={styles.recommendAdsText}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.recommendAdsTexts1}>예상수익</Text>
                  <View>
                    <Text style={styles.recommendAdsTexts2}>
                      16,000 ~ 17,000
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.recommendAdsTexts1}>부착기간</Text>
                  <View style={{flex: 1}}>
                    <Text style={styles.recommendAdsTexts2}>23일</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ResisterCarInfoBtn: {
    width: '50%',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 20,
  },
  adContent: {
    width: SCREEN_WIDTH - 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    marginVertical: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  HomeText: {
    fontSize: 42,
    color: 'white',
    fontFamily: 'BlackHanSans-Regular',
    textAlignVertical: 'bottom',
  },
  recommendAds: {
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  recommendAdsText: {
    justifyContent: 'center',
  },
  recommendAdsTexts1: {
    paddingHorizontal: 10,
    fontFamily: 'BlackHanSans-Regular',
  },
  recommendAdsTexts2: {
    fontWeight: '500',
    color: 'black',
    paddingHorizontal: 10,
    fontFamily: 'BlackHanSans-Regular',
    textAlign: 'center',
  },
});

export default Home;
