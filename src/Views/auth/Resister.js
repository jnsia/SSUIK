import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

import axios from 'axios';

import LogoImage from '../../Images/logo.jpg';

const Resister = ({navigation}) => {
  const [step, setStep] = useState(1);
  const [userNickname, setuserNickname] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userPW, setuserPW] = useState('');
  const [userCheckPW, setuserCheckPW] = useState('');
  const [userName, setuserName] = useState('');
  const [userBirthday, setuserBirthday] = useState('');
  const [userPhoneNumber, setuserPhoneNumber] = useState('');
  const [userSex, setuserSex] = useState('');
  const [userJob, setuserJob] = useState('a');

  let CheckboxRef1 = null;
  let CheckboxRef2 = null;
  let CheckboxRef3 = null;
  let CheckboxRef4 = null;
  let CheckboxRef5 = null;

  let CheckboxRefAll = null;

  const [toggleAll, setToggleAll] = useState(false);

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  const storePermission = async () => {
    if (toggleAll === true) {
      try {
        await AsyncStorage.setItem('@isPermission', 'true');

        setStep(step + 1);
      } catch (e) {
        console.log('set error');
      }
    } else {
      Alert.alert('회원가입', '이용약관을 모두 체크해주세요.');
    }
  };

  const validateEmail = email => {
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const resisterSubmit = async () => {
    try {
      axios
        .post('http://localhost:8001/auth/resister', {
          email: userEmail,
          password: userPW,
          name: userName,
          birthday: userBirthday,
          phoneNumber: userPhoneNumber,
          sex: userSex,
          nickname: userNickname,
          job: userJob,
        })
        .then(Alert.alert('회원가입', '회원가입이 완료되었습니다!'))
        .then(navigation.push('Login'));
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {step === 1 && (
        <View style={styles.container}>
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 10,
              marginBottom: 40,
            }}>
            <Image
              source={LogoImage}
              resizeMode={'contain'}
              style={{width: 150, height: 150}}
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'white',
              }}>
              SSUIK에 오신 것을
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'white',
              }}>
              환영합니다.
            </Text>
          </View>
          <View>
            <CheckBox
              style={{
                color: '#FFC500',
              }}
              ref={ref => (CheckboxRefAll = ref)}
              textStyle={{
                textDecorationLine: 'none',
                color: '#FFC500',
              }}
              fillColor="#FFC500"
              isChecked={toggleAll}
              onPress={() => {
                if (toggleAll === false) {
                  setToggleAll(true);

                  if (toggle1 === false) {
                    CheckboxRef1.onPress();
                  }

                  if (toggle2 === false) {
                    CheckboxRef2.onPress();
                  }

                  if (toggle3 === false) {
                    CheckboxRef3.onPress();
                  }

                  if (toggle4 === false) {
                    CheckboxRef4.onPress();
                  }

                  if (toggle5 === false) {
                    CheckboxRef5.onPress();
                  }
                } else {
                  setToggleAll(false);

                  if (toggle1 === true) {
                    CheckboxRef1.onPress();
                  }

                  if (toggle2 === true) {
                    CheckboxRef2.onPress();
                  }

                  if (toggle3 === true) {
                    CheckboxRef3.onPress();
                  }

                  if (toggle4 === true) {
                    CheckboxRef4.onPress();
                  }

                  if (toggle5 === true) {
                    CheckboxRef5.onPress();
                  }
                }
              }}
              text="전체 약관 동의 (필수)"
            />
            <CheckBox
              style={{paddingTop: 20}}
              ref={ref => (CheckboxRef1 = ref)}
              isChecked={toggle1}
              textStyle={{
                textDecorationLine: 'none',
                color: 'white',
              }}
              fillColor="#FFC500"
              onPress={() => {
                if (toggle1 === false) {
                  setToggle1(true);
                } else {
                  setToggle1(false);
                }
              }}
              text="이용 약관 동의 (필수)"
            />
            <CheckBox
              style={{paddingTop: 20}}
              ref={ref => (CheckboxRef2 = ref)}
              isChecked={toggle2}
              textStyle={{
                textDecorationLine: 'none',
                color: 'white',
              }}
              fillColor="#FFC500"
              onPress={() => {
                if (toggle2 === false) {
                  setToggle2(true);
                } else {
                  setToggle2(false);
                }
              }}
              text="개인정보 수집 이용 동의 (필수)"
            />
            <CheckBox
              style={{paddingTop: 20}}
              ref={ref => (CheckboxRef3 = ref)}
              isChecked={toggle3}
              textStyle={{
                textDecorationLine: 'none',
                color: 'white',
              }}
              fillColor="#FFC500"
              onPress={() => {
                if (toggle3 === false) {
                  setToggle3(true);
                } else {
                  setToggle3(false);
                }
              }}
              text="위치기반 서비스 이용 동의 (필수)"
            />
            <CheckBox
              style={{paddingTop: 20}}
              ref={ref => (CheckboxRef4 = ref)}
              isChecked={toggle4}
              textStyle={{
                textDecorationLine: 'none',
                color: 'white',
              }}
              fillColor="#FFC500"
              onPress={() => {
                if (toggle4 === false) {
                  setToggle4(true);
                } else {
                  setToggle4(false);
                }
              }}
              text="개인정보 3자 제공 (필수)"
            />
            <CheckBox
              style={{paddingTop: 20}}
              ref={ref => (CheckboxRef5 = ref)}
              isChecked={toggle5}
              textStyle={{
                textDecorationLine: 'none',
                color: 'white',
              }}
              fillColor="#FFC500"
              onPress={() => {
                if (toggle5 === false) {
                  setToggle5(true);
                } else {
                  setToggle5(false);
                }
              }}
              text="만 18세 이상 확인 (필수)"
            />
          </View>
          <TouchableOpacity
            style={styles.resisterBtn}
            onPress={storePermission}>
            <Text style={styles.button}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 2 && (
        <View style={styles.container}>
          <View style={{marginTop: 40}}>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
              }}>
              브랜드 서포터즈가
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
              }}>
              되어볼까요?
            </Text>
            <View style={{marginTop: 60}}>
              <TextInput
                keyboardType="email-address"
                style={styles.input}
                placeholder="이메일"
                placeholderTextColor={'gray'}
                value={userEmail}
                onChangeText={setuserEmail}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.resisterBtn}
            onPress={() => {
              if (userEmail === '') {
                Alert.alert('회원가입', '이메일을 입력해 주세요.');
              } else {
                validateEmail(userEmail)
                  ? nextStep()
                  : Alert.alert('회원가입', '이메일 형식으로 작성해주세요.');
              }
            }}>
            <Text style={styles.button}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 3 && (
        <View style={styles.container}>
          <View style={{marginTop: 60}}>
            <Text style={styles.resisterText}>비밀번호 입력</Text>
            <TextInput
              style={styles.input}
              placeholder="8자리 이상 입력해주세요."
              placeholderTextColor={'gray'}
              value={userPW}
              onChangeText={setuserPW}
              secureTextEntry
            />
          </View>
          <View style={{marginTop: 40}}>
            <Text style={styles.resisterText}>비밀번호 확인</Text>
            <TextInput
              style={styles.input}
              placeholder="다시 한번 더 입력해주세요"
              placeholderTextColor={'gray'}
              value={userCheckPW}
              onChangeText={setuserCheckPW}
              secureTextEntry
            />
            {userPW === userCheckPW && userPW !== '' ? (
              <View style={{paddingLeft: 10}}>
                <Text style={{...styles.text, fontSize: 12, color: '#FFC500'}}>
                  비밀번호가 일치합니다!
                </Text>
              </View>
            ) : (
              <View>
                <Text></Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            style={styles.resisterBtn}
            onPress={() => {
              if (userPW.length < 8 || userCheckPW < 8) {
                Alert.alert('회원가입', '비밀번호을 8자리 이상 입력해 주세요.');
              } else if (userPW !== userCheckPW) {
                Alert.alert('회원가입', '일치하지 않습니다.');
              } else {
                nextStep();
              }
            }}>
            <Text style={styles.button}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 4 && (
        <View style={styles.container}>
          <View style={{marginTop: 40}}>
            <Text style={styles.resisterText}>이름</Text>
            <TextInput
              inputMode="text"
              style={styles.input}
              placeholder="실명을 입력해주세요"
              placeholderTextColor={'gray'}
              value={userName}
              onChangeText={setuserName}
              returnKeyType="next"
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.resisterText}>생년월일 8자리</Text>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="YYYY/MM/DD"
              placeholderTextColor={'gray'}
              value={userBirthday}
              onChangeText={setuserBirthday}
              maxLength={8}
              returnKeyType="next"
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.resisterText}>전화번호</Text>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="-를 빼고 입력해주세요."
              placeholderTextColor={'gray'}
              value={userPhoneNumber}
              onChangeText={setuserPhoneNumber}
              returnKeyType="next"
              maxLength={11}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.resisterText}>성별 선택</Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 20,
              }}>
              <TouchableOpacity
                style={
                  userSex === '남성' ? styles.userSex : styles.userSexFocus
                }
                onPress={() => setuserSex('남성')}>
                <Text
                  style={
                    userSex === '남성'
                      ? styles.userSexText
                      : styles.userSexFocusText
                  }>
                  남성
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  userSex === '여성' ? styles.userSex : styles.userSexFocus
                }
                onPress={() => setuserSex('여성')}>
                <Text
                  style={
                    userSex === '여성'
                      ? styles.userSexText
                      : styles.userSexFocusText
                  }>
                  여성
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.resisterBtn}
            onPress={() => {
              if (userName === '') {
                Alert.alert('회원가입', '이름을 입력해 주세요.');
              } else if (userBirthday === '' || userBirthday.length !== 8) {
                Alert.alert('회원가입', '생년월일을 정확히 입력해 주세요.');
              } else if (
                userPhoneNumber === '' ||
                userPhoneNumber.length < 10
              ) {
                Alert.alert('회원가입', '전화번호를 정확히 입력해 주세요.');
              } else if (userSex === '') {
                Alert.alert('회원가입', '성별을 선택해 주세요.');
              } else {
                nextStep();
              }
            }}>
            <Text style={styles.button}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 5 && (
        <View style={styles.container}>
          <View style={{marginTop: 40}}>
            <Text style={styles.resisterText}>닉네임 입력</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="SSUIK에서 사용될 이름을 입력해주세요."
              placeholderTextColor={'gray'}
              value={userNickname}
              onChangeText={setuserNickname}
              returnKeyType="next"
            />
          </View>
          <View style={{marginTop: 40}}>
            <Text style={styles.resisterText}>직업 선택</Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={userJob}
                onValueChange={(itemValue, itemIndex) => setuserJob(itemValue)}
                dropdownIconColor="gray"
                selectionColor="gray">
                <Picker.Item
                  style={styles.pickerItem}
                  label="근로소득자"
                  value="근로소득자"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="자영업자"
                  value="자영업자"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="학생"
                  value="학생"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="주부"
                  value="주부"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="무직"
                  value="무직"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="청년퇴직자"
                  value="청년퇴직자"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="프리랜서"
                  value="프리랜서"
                />
                {/* <Picker.Item
                  style={styles.pickerItem}
                  label="기타(직접입력)"
                  value="기타(직접입력)"
                /> */}
              </Picker>
            </View>
          </View>
          <TouchableOpacity style={styles.resisterBtn} onPress={nextStep}>
            <Text style={styles.button}>회원가입 완료</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 6 && (
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginTop: 80, alignItems: 'center'}}>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 20}}>
              브랜드 서포터가 되신걸 축하합니다!
            </Text>
          </View>
          <View>
            <Image
              source={require('../../Images/fireworks.png')}
              style={{width: 200, height: 200}}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 20}}>
              내가 좋아하는 브랜드를
            </Text>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 20}}>
              서포트 해볼까요?
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderColor: '#FFC500',
              borderWidth: 1,
              borderRadius: 20,
              marginBottom: 80,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}
            onPress={() => resisterSubmit()}>
            <Text
              style={{...styles.text, textAlign: 'center', color: '#FFC500'}}>
              로그인 하기
            </Text>
          </TouchableOpacity>
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
  input: {
    marginTop: 10,
    fontSize: 16,
    padding: 10,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  resisterBtn: {
    position: 'absolute',
    marginHorizontal: 20,
    bottom: 20,
    width: '100%',
    padding: 15,
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
  userSex: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
  },
  userSexFocus: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
  },
  userSexText: {
    white: 'black',
    textAlign: 'center',
  },
  userSexFocusText: {
    color: 'gray',
    textAlign: 'center',
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  picker: {
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'black',
    height: 40,
    justifyContent: 'center',
  },
  pickerItem: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Resister;
