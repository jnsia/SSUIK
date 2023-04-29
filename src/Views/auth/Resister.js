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
          <View style={{padding: 20}}>
            <Text
              style={{fontSize: 28, fontWeight: '600', paddingVertical: 10}}>
              SSUIK 이용약관
            </Text>
            <Text style={{color: '#FF9500', fontSize: 16}}>
              서비스 이용을 위한 약관동의가 필요합니다.
            </Text>
          </View>
          <View style={{marginBottom: 50}}>
            <CheckBox
              style={{paddingVertical: 20, borderBottomWidth: 1}}
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
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '60%',
              backgroundColor: '#FF9500',
              borderRadius: 20,
              padding: 10,
            }}
            onPress={storePermission}>
            <Text style={{fontSize: 20, color: 'white'}}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 2 && (
        <View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>이메일</Text>
            <TextInput
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              style={styles.input}
              placeholder="이메일"
              value={userEmail}
              onChangeText={setuserEmail}
            />
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
            onPress={() => {
              if (userEmail === '') {
                alert('이메일을 입력해 주세요.');
              } else {
                nextStep();
              }
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 3 && (
        <View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>비밀번호</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="비밀번호"
              value={userPW}
              onChangeText={setuserPW}
              secureTextEntry
            />
          </View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>비밀번호 확인</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="비밀번호 확인"
              value={userCheckPW}
              onChangeText={setuserCheckPW}
              secureTextEntry
            />
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
            onPress={() => {
              if (userPW === '' || userCheckPW === '') {
                alert('비밀번호을 입력해 주세요.');
              } else if (userPW === userCheckPW) {
                alert('일치하지 않습니다.');
              } else {
                nextStep();
              }
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 4 && (
        <View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>이름</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="이름"
              value={userName}
              onChangeText={setuserName}
            />
          </View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>
              생년월일 6자리
            </Text>
            <TextInput
              autoCapitalize={'none'}
              keyboardType={'number'}
              style={styles.input}
              placeholder="000000"
              value={userBirthday}
              onChangeText={setuserBirthday}
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
          <View>
            <Text style={{fontWeight: 'bold', padding: 10}}>성별 선택</Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={
                  userSex === '남자'
                    ? styles.madeCountry
                    : styles.madeCountryFocus
                }
                onPress={() => setuserSex('남자')}>
                <Text style={styles.madeCountryText}>남자</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  userSex === '여자'
                    ? styles.madeCountry
                    : styles.madeCountryFocus
                }
                onPress={() => setuserSex('여자')}>
                <Text style={styles.madeCountryText}>여자</Text>
              </TouchableOpacity>
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
            <Text style={{fontSize: 20, color: 'white'}}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 5 && (
        <View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>회원정보</Text>
            <Image
              source={ProfileDefaultImage}
              resizeMode={'contain'}
              style={{width: 50, height: 50, margin: 20}}
            />
          </View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>닉네임</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="닉네임"
              value={userNickname}
              onChangeText={setuserNickname}
              returnKeyType="next"
            />
          </View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>제조사</Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={userJob}
                onValueChange={(itemValue, itemIndex) => setuserJob(itemValue)}>
                <Picker.Item
                  style={styles.pickerItem}
                  label="벤츠"
                  value="벤츠"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="BMW"
                  value="BMW"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="아우디"
                  value="아우디"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="폭스바겐"
                  value="폭스바겐"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="볼보"
                  value="볼보"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="쉐보레"
                  value="쉐보레"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="테슬라"
                  value="테슬라"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="미니"
                  value="미니"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="렉서스"
                  value="렉서스"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="닛산"
                  value="닛산"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="도요타"
                  value="도요타"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="혼다"
                  value="혼다"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="인피니티"
                  value="인피니티"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="마세라티"
                  value="마세라티"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="람보르기니"
                  value="람보르기니"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="포드"
                  value="포드"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="랜드로버"
                  value="랜드로버"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="링컨"
                  value="링컨"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="재규어"
                  value="재규어"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="지프"
                  value="지프"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="페라리"
                  value="페라리"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="포르쉐"
                  value="포르쉐"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="푸조"
                  value="푸조"
                />
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
            <Text style={{fontSize: 20, color: 'white'}}>회원가입 완료</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 6 && (
        <TouchableOpacity
          style={styles.resisterBtn}
          onPress={() => resisterSubmit()}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            로그인 하기
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  input: {
    width: '100%',
    fontSize: 16,
    padding: 5,
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
  },
  resisterInputArea: {
    fontWeight: 'bold',
  },
  resisterBtn: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    padding: 5,
    backgroundColor: '#FF9500',
    borderRadius: 5,
    textAlign: 'center',
  },
  madeCountry: {
    flex: 1,
    backgroundColor: '#FF9500',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
  },
  madeCountryFocus: {
    flex: 1,
    backgroundColor: 'lightgrey',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default Resister;
