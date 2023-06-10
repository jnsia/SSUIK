import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Entypo';

const My = ({navigation}) => {
  const storeData = () => {
    try {
      AsyncStorage.removeItem('@isLogin');
    } catch (e) {
      console.log('set error');
    }

    navigation.pop();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.myInfo}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
              backgroundColor: 'white',
            }}
            source={require('../../Images/my-img-test.png')}
          />
          <View style={styles.myInfoText}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => navigation.push('UserInfo')}>
              <Text
                style={{
                  ...styles.text,
                  marginRight: 20,
                  fontSize: 18,
                  color: '#FFC500',
                }}>
                최고 서포터
              </Text>
              <Icon name="chevron-right" color={'white'} size={20} />
            </TouchableOpacity>
            <Text style={{...styles.text, fontSize: 12, marginTop: 10}}>
              kia54682@gmail.com
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#FFC500',
              borderRadius: 20,
              paddingHorizontal: 15,
              paddingVertical: 5,
            }}>
            <Text
              style={{...styles.text, fontSize: 12, color: '#FFC500'}}
              onPress={() => storeData()}>
              로그아웃
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.myPageList}
        onPress={() => navigation.push('AdsCollection')}>
        <Text style={styles.text}>내 광고 컬렉션</Text>
        <Icon name="chevron-right" color={'white'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.myPageList}
        onPress={() => navigation.push('Setting')}>
        <Text style={styles.text}>알림설정</Text>
        <Icon name="chevron-right" color={'white'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.myPageList}
        onPress={() => navigation.push('ServiceCenter')}>
        <Text style={styles.text}>고객센터</Text>
        <Icon name="chevron-right" color={'white'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.myPageList}
        onPress={() => navigation.push('TermsAndPolicy')}>
        <Text style={styles.text}>약관 및 정책</Text>
        <Icon name="chevron-right" color={'white'} size={25} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
  },
  myInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  myInfoText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 10,
  },
  myPageList: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default My;
