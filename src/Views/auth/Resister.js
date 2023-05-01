import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

import ProfileDefaultImage from '../../Images/love-img-test.png';
import axios from 'axios';

import LogoImage from '../../Images/ssuik-logo.png';

const Resister = ({navigation}) => {
  const [step, setStep] = useState(1);
  const [userNickname, setuserNickname] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userPW, setuserPW] = useState('');
  const [userCheckPW, setuserCheckPW] = useState('');
  const [userName, setuserName] = useState('');
  const [userBirthday, setuserBirthday] = useState('');
  const [userPhoneNumber, setuserPhoneNumber] = useState('');
  const [userSex, setuserSex] = useState('a');
  const [userImage, setuserImage] = useState('a');
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
      alert('이용약관을 모두 체크해주세요.');
    }
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
          image: userImage,
          nickname: userNickname,
          job: userJob,
        })
        .then(alert('회원가입이 완료되었습니다!'))
        .then(navigation.push('Login'));
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      {step === 1 && (
        <View style={styles.container}>
          <View style={{padding: 20, marginBottom: 40}}>
            <Image
              source={LogoImage}
              resizeMode={'cover'}
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
                color: '#FFD500',
              }}
              ref={ref => (CheckboxRefAll = ref)}
              textStyle={{
                textDecorationLine: 'none',
              }}
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
              }}
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
              }}
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
              }}
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
              }}
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
              }}
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
                inputMode="email"
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
                alert('이메일을 입력해 주세요.');
              } else {
                nextStep();
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
          </View>
          <TouchableOpacity
            style={styles.resisterBtn}
            onPress={() => {
              if (userPW === '' || userCheckPW === '') {
                alert('비밀번호을 입력해 주세요.');
              } else if (userPW === userCheckPW) {
                alert('일치하지 않습니다.');
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
            />
          </View>
          <View style={{marginTop: 40}}>
            <Text style={styles.resisterText}>생년월일 6자리</Text>
            <TextInput
              inputMode="numeric"
              keyboardType={'number'}
              style={styles.input}
              placeholder="YYYY/MM/DD"
              placeholderTextColor={'gray'}
              value={userBirthday}
              onChangeText={setuserBirthday}
            />
          </View>
          <View style={{marginTop: 40}}>
            <Text style={styles.resisterText}>전화번호</Text>
            <TextInput
              inputMode="numeric"
              style={styles.input}
              placeholder="-를 빼고 입력해주세요."
              placeholderTextColor={'gray'}
              value={userPhoneNumber}
              onChangeText={setuserPhoneNumber}
            />
          </View>
          <View style={{marginTop: 40}}>
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
                alert('이름을 입력해 주세요.');
              } else if (userBirthday === '') {
                alert('생년월일을 입력해 주세요.');
              } else if (userPhoneNumber === '') {
                alert('전화번호를 입력해 주세요.');
              } else if (userSex === '') {
                alert('성별을 선택해 주세요.');
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
          <View style={{alignItems: 'center'}}>
            <Text style={styles.resisterText}>프로필 이미지 등록</Text>
            <Image
              source={ProfileDefaultImage}
              resizeMode={'contain'}
              style={{width: 50, height: 50, margin: 20}}
            />
          </View>
          <View style={{marginTop: 40}}>
            <Text style={styles.resisterText}>닉네임 입력</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="닉네임"
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
                onValueChange={(itemValue, itemIndex) => setuserJob(itemValue)}>
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
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '60%',
              backgroundColor: '#FF9500',
              borderRadius: 20,
              padding: 10,
            }}
            onPress={nextStep}>
            <Text style={styles.button}>회원가입 완료</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 6 && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.resisterBtn}
            onPress={() => resisterSubmit()}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
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
});

export default Resister;
