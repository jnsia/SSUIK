import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Platform,
  BackHandler,
  TextInput,
  ScrollView,
} from 'react-native';

import testBack2 from '../../Images/testBack2.jpg';
import PointInfo from '../../Components/PointInfo';
import {Picker} from '@react-native-picker/picker';
import {useFocusEffect} from '@react-navigation/native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const pointHistory = [
  {
    type: 'withdraw',
    title: '포인트 현금 출금',
    time: '2023.03.01 15:30:03',
    point: '20,000',
    done: false,
  },
  {
    type: 'accumulate',
    title: 'Bad Blue',
    time: '2023.03.02 16:56:11',
    point: '25,000',
    done: true,
  },
  {
    type: 'accumulate',
    title: '첫 가입 포인트',
    time: '2023.02.13 12:43:34',
    point: '3,000',
    done: true,
  },
];

const Point = ({navigation}) => {
  const [withdraw, setWithdraw] = useState(false);
  const [history, setHistory] = useState('전체');
  const [apply, setApply] = useState(true);

  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState('');
  const [bank, setBank] = useState('');

  const plusAmount = num => {
    setAmount(amount + num);
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          return true;
        },
      );

      return () => backHandler.remove();
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      setWithdraw(false);
      setAmount(0);
      setAccount('');
      setBank('');
    }, []),
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={testBack2}
        style={{
          width: SCREEN_WIDTH,
          marginTop: 20,
          paddingVertical: 20,
          alignItems: 'center',
        }}
        imageStyle={{
          borderRadius: 10,
          opacity: 0.5,
        }}>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: '#FFC500',
              fontFamily: 'Pretendard-Regular',
            }}>
            POINT
          </Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{...styles.pointText, fontWeight: 'bold'}}>8,000</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{...styles.pointText, fontSize: 12, color: 'lightgray'}}>
            적립 예정: 30,000
          </Text>
        </View>
        <TouchableOpacity
          style={styles.withdrawBtn}
          onPress={() => setWithdraw(true)}>
          <Text
            style={{
              ...styles.pointText,
              textAlign: 'center',
              fontSize: 13,
              color: 'black',
              fontWeight: 'bold',
            }}>
            출금 신청
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      {withdraw ? (
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <TouchableOpacity
              style={
                apply
                  ? {
                      borderBottomWidth: 2,
                      borderColor: '#FFC500',
                      paddingTop: 20,
                      paddingBottom: 10,
                      paddingHorizontal: 20,
                    }
                  : {
                      paddingTop: 20,
                      paddingBottom: 10,
                      paddingHorizontal: 20,
                    }
              }
              onPress={() => setApply(true)}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: apply ? '#FFC550' : 'grey',
                }}>
                출금 신청
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                apply
                  ? {
                      paddingTop: 20,
                      paddingBottom: 10,
                      paddingHorizontal: 20,
                    }
                  : {
                      borderBottomWidth: 2,
                      borderColor: '#FFC500',
                      paddingTop: 20,
                      paddingBottom: 10,
                      paddingHorizontal: 20,
                    }
              }
              onPress={() => setApply(false)}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: apply ? 'grey' : '#FFC550',
                }}>
                신청 내역
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{marginVertical: 10}}>
            {apply ? (
              <View style={{flex: 1, paddingHorizontal: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 20,
                  }}>
                  <Text style={{...styles.text, fontSize: 16}}>
                    보유 포인트
                  </Text>
                  <Text
                    style={{...styles.text, fontSize: 16, color: 'lightgray'}}>
                    8,000POINT
                  </Text>
                </View>
                <Text style={{...styles.text, fontSize: 16, marginTop: 10}}>
                  출금 신청 금액
                </Text>
                <View>
                  <View style={styles.inputBox}>
                    <TextInput
                      style={styles.input}
                      placeholder="출금할 금액을 입력해주세요."
                      placeholderTextColor={'gray'}
                      inputMode="numeric"
                      keyboardType="number-pad"
                      maxLength={10}
                      value={amount}
                      onChange={() => setAmount()}></TextInput>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={styles.amountBtn}
                      onPress={() => console.log(amount)}>
                      <Text style={{color: 'white', fontSize: 10}}>+ 1천</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.amountBtn}
                      onPress={() => plusAmount(10000)}>
                      <Text style={{color: 'white', fontSize: 10}}>+ 1만</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.amountBtn}
                      onPress={() => plusAmount(50000)}>
                      <Text style={{color: 'white', fontSize: 10}}>+ 5만</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.amountBtn}
                      onPress={() => plusAmount(100000)}>
                      <Text style={{color: 'white', fontSize: 10}}>+ 10만</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={{...styles.text, fontSize: 16, marginTop: 20}}>
                  출금 계좌
                </Text>
                <View
                  style={{
                    ...styles.inputBox,
                    flexDirection: 'row',
                    paddingVertical: 5,
                  }}>
                  <View
                    style={{
                      width: 120,
                      borderWidth: 0.5,
                      borderColor: bank === '' ? 'gray' : '#FFC500',
                      borderRadius: 10,
                      justifyContent: 'center',
                      marginVertical: 5,
                    }}>
                    <Picker
                      style={{
                        color: bank === '' ? 'gray' : '#FFC500',
                        height: 0,
                      }}
                      dropdownIconColor={bank === '' ? 'gray' : '#FFC500'}
                      selectionColor={bank === '' ? 'gray' : '#FFC500'}
                      selectedValue={bank}
                      onValueChange={(itemValue, itemIndex) =>
                        setBank(itemValue)
                      }>
                      <Picker.Item
                        style={styles.pickerItem}
                        label="은행 선택"
                        value=""
                      />
                      <Picker.Item
                        style={styles.pickerItem}
                        label="대구은행"
                        value="대구은행"
                      />
                      <Picker.Item
                        style={styles.pickerItem}
                        label="카카오뱅크"
                        value="카카오뱅크"
                      />
                      <Picker.Item
                        style={styles.pickerItem}
                        label="기업은행"
                        value="기업은행"
                      />
                      <Picker.Item
                        style={styles.pickerItem}
                        label="국민은행"
                        value="국민은행"
                      />
                      <Picker.Item
                        style={styles.pickerItem}
                        label="농협"
                        value="농협"
                      />
                      <Picker.Item
                        style={styles.pickerItem}
                        label="하나은행"
                        value="하나은행"
                      />
                    </Picker>
                  </View>
                  <TextInput
                    style={{...styles.input, textAlign: 'right'}}
                    placeholder="계좌번호를 입력해주세요."
                    placeholderTextColor={'gray'}
                    inputMode="numeric"
                    keyboardType="number-pad"
                    maxLength={20}
                    value={account}
                    onChangeText={setAccount}></TextInput>
                </View>
                {amount !== 0 && bank !== '' && account !== '' ? (
                  <TouchableOpacity
                    style={{...styles.applyBtn, backgroundColor: '#FFC500'}}>
                    <Text style={{...styles.applyText, color: 'black'}}>
                      출금하기
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.applyBtn}>
                    <Text style={styles.applyText}>출금하기</Text>
                  </View>
                )}
              </View>
            ) : (
              <View>
                {pointHistory.map((info, index) => (
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: 'gray',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 20,
                      paddingVertical: 20,
                    }}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{...styles.text, fontSize: 13, color: 'gray'}}>
                        {info.time.split(' ')[0]}
                      </Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          ...styles.text,
                          textAlign: 'right',
                          fontSize: 14,
                        }}>
                        {info.point}POINT
                      </Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          ...styles.text,
                          textAlign: 'right',
                          fontSize: 14,
                          color:
                            info.type !== 'withdraw' || info.done
                              ? 'white'
                              : '#FFC500',
                        }}>
                        {info.type !== 'withdraw' || info.done
                          ? '출금 완료'
                          : '출금 예정'}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 20,
              paddingHorizontal: 15,
            }}>
            <TouchableOpacity
              style={
                history === '전체' ? styles.historyActiveBtn : styles.historyBtn
              }
              onPress={() => setHistory('전체')}>
              <Text
                style={history === '전체' ? styles.activeText : styles.text}>
                전체
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                history === '적립' ? styles.historyActiveBtn : styles.historyBtn
              }
              onPress={() => setHistory('적립')}>
              <Text
                style={history === '적립' ? styles.activeText : styles.text}>
                적립
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                history === '출금' ? styles.historyActiveBtn : styles.historyBtn
              }
              onPress={() => setHistory('출금')}>
              <Text
                style={history === '출금' ? styles.activeText : styles.text}>
                출금
              </Text>
            </TouchableOpacity>
          </View>
          {history === '전체' && (
            <View>
              {pointHistory.map((info, index) => (
                <PointInfo
                  type={info.type}
                  title={info.title}
                  time={info.time}
                  point={info.point}
                />
              ))}
            </View>
          )}
          {history === '적립' && (
            <View>
              {pointHistory.map((info, index) =>
                info.type === 'accumulate' ? (
                  <PointInfo
                    type={info.type}
                    title={info.title}
                    time={info.time}
                    point={info.point}
                  />
                ) : (
                  <View></View>
                ),
              )}
            </View>
          )}
          {history === '출금' && (
            <View>
              {pointHistory.map((info, index) =>
                info.type === 'withdraw' ? (
                  <PointInfo
                    type={info.type}
                    title={info.title}
                    time={info.time}
                    point={info.point}
                  />
                ) : (
                  <View></View>
                ),
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  text: {
    fontFamily: 'Pretendard-regular',
    color: 'white',
    fontSize: 12,
  },
  activeText: {
    fontFamily: 'Pretendard-regular',
    color: '#FFC500',
    fontSize: 12,
  },
  withdrawBtn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#FFC500',
    borderRadius: 20,
    marginTop: 10,
  },
  pointText: {
    fontSize: 28,
    color: '#FFC500',
    fontFamily: 'Pretendard-regular',
  },
  historyBtn: {
    borderWidth: 0.5,
    borderColor: 'white',
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  historyActiveBtn: {
    borderWidth: 0.5,
    borderColor: '#FFC500',
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  inputBox: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    color: 'lightgray',
    justifyContent: 'space-between',
  },
  input: {
    color: 'white',
    paddingBottom: 0,
    fontSize: 16,
  },
  amountBtn: {
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 10,
    marginRight: 5,
    justifyContent: 'center',
  },
  pickerItem: {
    fontSize: 12,
  },
  applyBtn: {
    backgroundColor: 'lightgray',
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  applyText: {
    textAlign: 'center',
  },
});

export default Point;
