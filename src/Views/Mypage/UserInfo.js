import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';

const UserInfo = () => {
  return (
    <ScrollView>
      <View
        style={{backgroundColor: 'white', paddingTop: 40, marginBottom: 10}}>
        <TouchableOpacity style={styles.myInfo}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#FF9500',
              resizeMode: 'contain',
            }}
            source={require('../../Images/my-img-test.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
            파란눈사람
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginVertical: 10,
          paddingVertical: 10,
        }}>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>이메일</Text>
          <TextInput
            style={styles.userInfoInputText}
            autoCapitalize="none"
            placeholder="kia54682@gmail.com"
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>현재 비밀번호</Text>
          <TextInput
            style={styles.userInfoInputText}
            autoCapitalize="none"
            placeholder="kia54682@gmail.com"
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>신규 비밀번호</Text>
          <TextInput
            style={styles.userInfoInputText}
            autoCapitalize="none"
            placeholder="kia54682@gmail.com"
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            marginVertical: 10,
            marginHorizontal: 60,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            변경
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginVertical: 10,
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>
          휴대폰 인증
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          {/* picker 쓰자 */}
          <TextInput
            style={{
              flex: 1,
              backgroundColor: 'lightgrey',
              marginHorizontal: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
            autoCapitalize="none"
            placeholder="통신사"
          />
          <TextInput
            style={{
              flex: 2,
              backgroundColor: 'lightgrey',
              marginHorizontal: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
            autoCapitalize="none"
            placeholder="010-0000-0000"
            keyborardType="numeric"
          />
          <TouchableOpacity
            style={{
              flex: 2,
              backgroundColor: 'black',
              marginHorizontal: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              인증번호 전송
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  myInfo: {
    flex: 1,
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  userInfoText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfoInputText: {
    flex: 2,
    padding: 0,
    marginHorizontal: 10,
    paddingLeft: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
  },
});

export default UserInfo;
