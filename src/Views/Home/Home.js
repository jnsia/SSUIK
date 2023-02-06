import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import testImage from '../../Images/test.jpg';
import testBrand from '../../Images/testBrand.jpg';
import testBack from '../../Images/testBack.jpg';
import logoImage from '../../Images/ssuik-logo.png';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}>
        <ImageBackground
          source={testImage}
          resizeMode="cover"
          style={{
            width: SCREEN_WIDTH,
            backgroundColor: 'grey',
            paddingHorizontal: 20,
            marginVertical: 40,
            paddingVertical: 40,
          }}>
          <View style={{paddingVertical: 20}}>
            <Text style={{...styles.HomeText, fontSize: 20}}>
              나도 이제부터 브랜드 서포터즈?
            </Text>
          </View>
          <View style={{marginBottom: 40}}>
            <Text style={styles.HomeText}>나의 스폰서를</Text>
            <Text style={styles.HomeText}>찾아주세요</Text>
          </View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => navigation.push('ResisterCarInfo')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: 'white',
                fontFamily: 'BlackHanSans-Regular',
              }}>
              스폰서 찾기
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          source={testBack}
          resizeMode="cover"
          style={{
            width: SCREEN_WIDTH,
            backgroundColor: 'grey',
            paddingHorizontal: 20,
            marginVertical: 40,
            paddingVertical: 40,
          }}>
          <View style={{paddingVertical: 20}}>
            <Text style={{...styles.HomeText, fontSize: 20}}>
              나도 이제부터 브랜드 서포터즈?
            </Text>
          </View>
          <View style={{marginBottom: 40}}>
            <Text style={styles.HomeText}>나의 스폰서를</Text>
            <Text style={styles.HomeText}>찾아주세요</Text>
          </View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => navigation.push('ResisterCarInfo')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: 'white',
                fontFamily: 'BlackHanSans-Regular',
              }}>
              스폰서 찾기
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
      <View style={{marginBottom: 20}}>
        <Text style={{color: 'white', fontSize: 16, marginHorizontal: 20}}>
          OOO님이 진행 중인 광고
        </Text>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          <ImageBackground
            source={testBack}
            resizeMode="cover"
            imageStyle={{borderRadius: 20}}
            style={styles.processADS}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'BlackHanSans-Regular',
                color: 'white',
                lineHeight: 30,
              }}>
              2023.01.25 ~ 2023.03.23
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontFamily: 'BlackHanSans-Regular',
                color: 'yellow',
                lineHeight: 30,
              }}>
              D-21
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontFamily: 'BlackHanSans-Regular',
                lineHeight: 30,
              }}>
              + point 25,000
            </Text>
          </ImageBackground>
          <ImageBackground
            source={testImage}
            resizeMode="cover"
            imageStyle={{borderRadius: 20}}
            style={styles.processADS}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'BlackHanSans-Regular',
                color: 'white',
                lineHeight: 30,
              }}>
              2023.02.05 ~ 2023.04.30
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontFamily: 'BlackHanSans-Regular',
                color: 'yellow',
                lineHeight: 30,
              }}>
              D-10
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontFamily: 'BlackHanSans-Regular',
                lineHeight: 30,
              }}>
              + point 28,000
            </Text>
          </ImageBackground>
        </ScrollView>
      </View>
      <View>
        <Text style={{color: 'white', fontSize: 16, marginHorizontal: 20}}>
          OOO님을 위한 추천광고
        </Text>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          <View style={styles.recommendADS}>
            <Image
              source={logoImage}
              resizeMode="contain"
              style={{width: '100%'}}></Image>
          </View>
          <View style={styles.recommendADS}>
            <Image
              source={testBrand}
              resizeMode="contain"
              style={{width: '100%'}}></Image>
          </View>
          <View style={styles.recommendADS}>
            <Image
              source={logoImage}
              resizeMode="contain"
              style={{width: '100%'}}></Image>
          </View>
          <View style={styles.recommendADS}>
            <Image
              source={testBrand}
              resizeMode="contain"
              style={{width: '100%'}}></Image>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchBtn: {
    width: '30%',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    marginVertical: 10,
  },
  HomeText: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'BlackHanSans-Regular',
    textAlignVertical: 'bottom',
  },
  processADS: {
    width: 270,
    height: 180,
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
    marginLeft: 20,
  },
  recommendADS: {
    width: 180,
    height: 180,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 20,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
