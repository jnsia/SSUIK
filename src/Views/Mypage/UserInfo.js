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

const userInfo = {
  nickname: '최고 서포터',
  email: 'ssuik@naver.com',
  password: '●●●●●●●●',
  phoneNumber: '01096943994',
};

const UserInfo = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginVertical: 20}}>
        <View
          style={{
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <TouchableOpacity style={styles.myInfo}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: 'white',
                resizeMode: 'contain',
              }}
              source={require('../../Images/my-img-test.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginBottom: 10}}>
          <View style={{marginTop: 30}}>
            <Text style={styles.title}>닉네임 입력</Text>
            <View style={styles.border}>
              <Text style={styles.text}>{userInfo.nickname}</Text>
              <TouchableOpacity style={styles.alterBtn}>
                <Text style={{...styles.text, color: '#FFC500', fontSize: 12}}>
                  변경
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.title}>이메일</Text>
            <View style={styles.border}>
              <Text style={styles.text}>{userInfo.email}</Text>
              <TouchableOpacity style={styles.alterBtn}>
                <Text style={{...styles.text, color: '#FFC500', fontSize: 12}}>
                  변경
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.title}>비밀번호</Text>
            <View style={styles.border}>
              <Text style={styles.text}>{userInfo.password}</Text>
              <TouchableOpacity style={styles.alterBtn}>
                <Text style={{...styles.text, color: '#FFC500', fontSize: 12}}>
                  변경
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.title}>전화번호</Text>
            <View style={styles.border}>
              <Text style={styles.text}>{userInfo.phoneNumber}</Text>
              <TouchableOpacity style={styles.alterBtn}>
                <Text style={{...styles.text, color: '#FFC500', fontSize: 12}}>
                  변경
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Pretendard-Regular',
    marginBottom: 5,
  },
  border: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: 'white',
    fontFamily: 'Pretendard-Regular',
  },
  alterBtn: {
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#FFC500',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default UserInfo;
