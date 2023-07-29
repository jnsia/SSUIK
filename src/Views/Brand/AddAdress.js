import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddAdress = ({navigation}) => {
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAdress, setDetailAdress] = useState('');
  const [shippingName, setShippingName] = useState('');
  const [recipient, setRecipient] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  let userAddressInfo = {
    zipCode: zipCode,
    address: address,
    detailAdress: detailAdress,
    shippingName: shippingName,
    recipient: recipient,
    phoneNumber: phoneNumber,
  };

  const setUserAddress = async value => {
    try {
      const userAddress = JSON.stringify(value);
      await AsyncStorage.setItem('@userAddress', userAddress);
      navigation.pop();
      console.log(userAddress);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{marginTop: 40}}>
        <View style={styles.inputBox}>
          <View style={{flex: 1}}>
            <Text style={{...styles.text}}>우편번호</Text>
          </View>
          <View style={{flex: 2}}>
            <TextInput
              keyboardType="default"
              style={styles.input}
              placeholder=""
              placeholderTextColor={'gray'}
              value={zipCode}
              onChangeText={setZipCode}
              returnKeyType="next"
            />
          </View>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFC500',
                marginLeft: 20,
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 20,
              }}>
              <Text
                style={{...styles.text, textAlign: 'center', color: 'black'}}>
                우편번호 찾기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={{flex: 1}}>
            <Text style={{...styles.text}}>주소지</Text>
          </View>
          <View style={{flex: 4}}>
            <TextInput
              keyboardType="default"
              style={styles.input}
              placeholder="주소지를 입력해주세요."
              placeholderTextColor={'gray'}
              value={address}
              onChangeText={setAddress}
              returnKeyType="next"
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={{flex: 1}}>
            <Text style={{...styles.text}}>상세주소</Text>
          </View>
          <View style={{flex: 4}}>
            <TextInput
              keyboardType="default"
              style={styles.input}
              placeholder="상세주소를 입력해주세요."
              placeholderTextColor={'gray'}
              value={detailAdress}
              onChangeText={setDetailAdress}
              returnKeyType="next"
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={{flex: 1}}>
            <Text style={{...styles.text}}>배송지명</Text>
          </View>
          <View style={{flex: 4}}>
            <TextInput
              keyboardType="default"
              style={styles.input}
              placeholder="예) 집, 회사"
              placeholderTextColor={'gray'}
              value={shippingName}
              onChangeText={setShippingName}
              returnKeyType="next"
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={{flex: 1}}>
            <Text style={{...styles.text}}>수령인</Text>
          </View>
          <View style={{flex: 4}}>
            <TextInput
              keyboardType="default"
              style={styles.input}
              placeholder="이름을 입력해주세요."
              placeholderTextColor={'gray'}
              value={recipient}
              onChangeText={setRecipient}
              returnKeyType="next"
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={{flex: 1}}>
            <Text style={{...styles.text}}>휴대폰</Text>
          </View>
          <View style={{flex: 4}}>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="휴대폰 번호를 입력해주세요."
              placeholderTextColor={'gray'}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              returnKeyType="done"
              inputMode="numeric"
            />
          </View>
        </View>
      </ScrollView>
      {zipCode !== '' &&
      address !== '' &&
      detailAdress !== '' &&
      shippingName !== '' &&
      recipient !== '' &&
      phoneNumber !== '' ? (
        <TouchableOpacity
          style={{...styles.resisterBtn, backgroundColor: '#FFC500'}}
          onPress={() => setUserAddress(userAddressInfo)}>
          <Text style={{...styles.button, color: 'black'}}>저장하기</Text>
        </TouchableOpacity>
      ) : (
        <View style={{...styles.resisterBtn, backgroundColor: 'gray'}}>
          <Text style={{...styles.button, color: 'white', fontSize: 18}}>
            저장하기
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'BlackHanSans-Regular',
    color: 'white',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  input: {
    fontSize: 14,
    height: 45,
    paddingLeft: 20,
    borderRadius: 10,
    color: 'white',
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  resisterBtn: {
    position: 'absolute',
    marginHorizontal: 20,
    bottom: 20,
    width: '100%',
    padding: 10,
    backgroundColor: '#FFD500',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resisterText: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  button: {
    fontSize: 18,
    color: 'white',
  },
});

export default AddAdress;
