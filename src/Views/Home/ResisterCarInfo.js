import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const ResisterCarInfo = ({navigation}) => {
  const [userCarNumber, setuserCarNumber] = useState('');
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userCheckPW, setuserCheckPW] = useState('');
  const [userPhoneNumber, setuserPhoneNumber] = useState('');
  const [userBirthday, setuserBirthday] = useState('');

  return (
    <View>
      <View style={{margin: 20}}>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>차량번호</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="12가4567"
            value={userCarNumber}
            onChangeText={setuserCarNumber}
            returnKeyType="next"
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>제조국</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button title="          국산          " />
            <Button title="          수입          " />
          </View>
          {/* 버튼 포커스 선택 */}
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>제조사</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="현대"
            value={userPW}
            onChangeText={setuserPW}
          />
          {/* 드롭박스형 선택 */}
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>차량 모델</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="아반떼AD"
            value={userPW}
            onChangeText={setuserPW}
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>연식</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="비밀번호 확인"
            value={userCheckPW}
            onChangeText={setuserCheckPW}
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>전화번호</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="01012345678"
            value={userPhoneNumber}
            onChangeText={setuserPhoneNumber}
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>생년월일 6자리</Text>
          <TextInput
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            style={styles.input}
            placeholder="980309"
            value={userBirthday}
            onChangeText={setuserBirthday}
          />
        </View>
        <TouchableOpacity
          style={styles.resisterBtn}
          onPress={() => navigation.push('Home')}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            시작하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 16,
    padding: 5,
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
  },
});

export default ResisterCarInfo;
