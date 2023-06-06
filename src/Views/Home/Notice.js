import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import NoticeInfo from '../../Components/NoticeInfo';

const noticeHistory = [
  {
    icon: 'camera',
    main: '사진 인증을 다시 진행해주세요.',
    sub: '사진이 검수에 부적합하다고 판단되어 재촬영을 요청합니다.',
    time: '1시간 전',
  },
  {
    icon: 'credit',
    main: '포인트 적립이 완료되었어요.',
    sub: '20,000POINT 적립 완료',
    time: '1일 전',
  },
  {
    icon: 'camera',
    main: '스티커 부착 사진을 인증해주세요.',
    sub: '배송된 스티커를 부착하고 사진을 인증해주세요.',
    time: '2일 전',
  },
  {
    icon: 'credit',
    main: '출금 신청이 완료되었어요.',
    sub: '출금 신청 처리는 1~2일 정도 소요됩니다.',
    time: '3일 전',
  },
  {
    icon: 'credit',
    main: '출금이 완료되었어요.',
    sub: '30,000원 출금 완료',
    time: '5일 전',
  },
  {
    icon: 'home',
    main: '새로운 스폰서가 등록되었어요',
    sub: '스폰서를 등록하고 포인트를 적립 받으세요.',
    time: '5일 전',
  },
];

const Notice = () => {
  return (
    <ScrollView style={styles.container}>
      {noticeHistory.map((info, index) => (
        <NoticeInfo
          icon={info.icon}
          main={info.main}
          sub={info.sub}
          time={info.time}
        />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'BlackHanSans-Regular',
  },
});

export default Notice;
