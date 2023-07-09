import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

function SearchUserInfo() {
  const [searchemail, setSearchEmail] = useState(true);
  const [phoneNumber1, setPhoneNumber1] = useState();
  const [phoneNumber2, setPhoneNumber2] = useState();
  const [accessNumber, setAccessNumber] = useState();
  const [userEmail, setUserEmail] = useState('');

  const savePhoneNumber1 = e => {
    if (e.target.value.length) {
      return false;
    }

    setPhoneNumber1(e.target.value);
  };

  const email = () => {
    setSearchEmail(true);
  };

  const password = () => {
    setSearchEmail(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={email}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: searchemail ? '#FFC550' : 'grey',
            }}>
            이메일 찾기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={password}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: searchemail ? 'grey' : '#FFC550',
            }}>
            비밀번호 찾기
          </Text>
        </TouchableOpacity>
      </View>
      {searchemail ? (
        <View style={styles.main}>
          <Text style={styles.text}>휴대전화번호 입력</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="문자로 온 인증번호를 입력해주세요."
              placeholderTextColor={'gray'}
              inputMode="numeric"
              maxLength={6}
              value={accessNumber}
              onChangeText={setAccessNumber}></TextInput>
          </View>
          <TouchableOpacity>
            <Text>이메일 찾기</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.main}>
          <View>
            <Text style={styles.text}>이메일 입력</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="이메일을 입력해주세요."
                placeholderTextColor={'gray'}
                inputMode="email"
                value={userEmail}
                onChangeText={setUserEmail}></TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.text}>휴대전화번호 입력</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="-를 빼고 입력해주세요."
                placeholderTextColor={'gray'}
                inputMode="numeric"
                maxLength={11}
                value={phoneNumber2}
                onChangeText={setPhoneNumber2}></TextInput>
            </View>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: searchemail ? 'grey' : '#FFC550',
              }}>
              비밀번호 찾기
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  main: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
  text: {
    marginTop: 40,
    color: 'white',
    fontSize: 20,
  },
  inputBox: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    color: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    color: 'white',
    paddingBottom: 0,
  },
});

export default SearchUserInfo;
