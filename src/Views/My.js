import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const My = () => {
  return (
    <View>
      <View style={styles.myInfo}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 20,
          }}
          source={require('../Images/my-img-test.png')}
        />
        <View style={styles.myInfoText}>
          <Text style={{marginBottom: 10, fontSize: 18, fontWeight: 'bold'}}>
            파란눈사람
          </Text>
          <Text style={{fontSize: 16}}>kia54682@gmail.com</Text>
        </View>
      </View>
      <View style={styles.myPageList}>
        <Text>서포트 내역</Text>
      </View>
      <View style={styles.myPageList}>
        <Text>포인트 사용 내역</Text>
      </View>
      <View style={styles.myPageList}>
        <Text>고객센터</Text>
      </View>
      <View style={styles.myPageList}>
        <Text>환경설정</Text>
      </View>
      <View style={styles.myPageList}>
        <Text>약관 및 정책</Text>
      </View>
    </View>
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
