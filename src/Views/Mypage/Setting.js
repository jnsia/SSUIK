import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ToggleButton from '../../Components/ToggleButton';

const Setting = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginVertical: 20}}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderBottomWidth: 0.5,
            borderColor: 'gray',
          }}>
          <Text style={{...styles.text, fontSize: 20}}>앱 알림 설정</Text>
          <View style={{marginTop: 20}}>
            <View style={styles.toggleBox}>
              <Text style={styles.text}>푸쉬 알림</Text>
              <ToggleButton />
            </View>
            <View style={styles.toggleBox}>
              <Text style={styles.text}>알림 소리</Text>
              <ToggleButton />
            </View>
            <View style={styles.toggleBox}>
              <Text style={styles.text}>알림 진동</Text>
              <ToggleButton />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}>
          <Text style={{...styles.text}}>마케팅 정보 수신 동의</Text>
          <Text style={{...styles.text, color: '#FFC500', fontSize: 12}}>
            이벤트 및 혜택에 대한 정보를 받으실 수 있습니다.
          </Text>
          <View style={{marginTop: 20}}>
            <View style={styles.toggleBox}>
              <Text style={styles.text}>메일 수신 동의</Text>
              <ToggleButton />
            </View>
            <View style={styles.toggleBox}>
              <Text style={styles.text}>SMS 수신 동의</Text>
              <ToggleButton />
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
  text: {
    color: 'white',
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
  },
  toggleBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Setting;
