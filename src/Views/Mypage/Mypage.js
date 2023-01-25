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

const My = ({navigation}) => {
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(false);
      await AsyncStorage.setItem('isLogin', jsonValue);
      console.log(jsonValue);
    } catch (e) {
      console.log('set error');
    }
  };

  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.myInfo}
        onPress={() => navigation.push('UserInfo')}>
        <Image
          style={{
            width: 75,
            height: 75,
            borderRadius: 20,
            backgroundColor: 'white',
          }}
          source={require('../../Images/my-img-test.png')}
        />
        <View style={styles.myInfoText}>
          <Text style={{marginBottom: 10, fontSize: 18, fontWeight: 'bold'}}>
            파란눈사람
          </Text>
          <Text style={{fontSize: 16}}>kia54682@gmail.com</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.myPageList}
        onPress={() => navigation.push('AdsCollection')}>
        <Text>내 광고 컬렉션</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.myPageList}
        onPress={() => navigation.push('PointUseHistory')}>
        <Text>포인트 사용 내역</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.myPageList}
        onPress={() => navigation.push('ServiceCenter')}>
        <Text>고객센터</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.myPageList}
        onPress={() => navigation.push('Setting')}>
        <Text>환경설정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.myPageList}
        onPress={() => navigation.push('TermsAndPolicy')}>
        <Text>약관 및 정책</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.myPageList} onPress={() => storeData()}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  myInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  myInfoText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    marginLeft: 20,
  },
  myPageList: {
    padding: 30,
    paddingLeft: 40,
    backgroundColor: 'white',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
});

export default My;
