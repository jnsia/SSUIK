import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResisterCarInfo = ({navigation}) => {
  const [step, setStep] = useState(1);
  const [userCarNumber, setuserCarNumber] = useState('');
  const [userCarCountry, setUserCarCountry] = useState('');
  const [userCarModel, setuserCarModel] = useState('');
  const [userCarMFR, setuserCarMFR] = useState('');
  const [userCarYear, setuserCarYear] = useState('');
  const [userRelation, setuserRelation] = useState('본인');

  let states = [
    userCarNumber,
    userCarCountry,
    userCarModel,
    userCarMFR,
    userCarYear,
    userRelation,
  ];

  let carInfo = {
    carNumber: userCarNumber,
    carCountry: userCarCountry,
    carModel: userCarModel,
    carMFR: userCarMFR,
    carYear: userCarYear,
    relation: userRelation,
  };

  const storeCarInfo = async value => {
    for (let i = 0; i < states.length; i++) {
      if (states[i] === '') {
        alert('정보 입력 부탁드립니다.');
        break;
      } else {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('@carInfo', jsonValue);
          navigation.navigate('Home');
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{marginTop: 40, marginBottom: 80}}>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 24}}>
              정보 등록을 위해
            </Text>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 24}}>
              차량 번호를 입력해주세요 :)
            </Text>
          </View>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="차량 번호를 입력해주세요"
            placeholderTextColor={'gray'}
            value={userCarNumber}
            onChangeText={setuserCarNumber}
            returnKeyType="next"
          />
          {userCarNumber.length > 6 ? (
            <TouchableOpacity
              style={{...styles.resisterBtn, backgroundColor: '#FFC500'}}
              onPress={() => nextStep()}>
              <Text style={{...styles.text, color: 'black'}}>계속하기</Text>
            </TouchableOpacity>
          ) : (
            <View style={{...styles.resisterBtn, backgroundColor: 'gray'}}>
              <Text style={{...styles.text, color: 'white', fontSize: 16}}>
                계속하기
              </Text>
            </View>
          )}
        </View>
      )}
      {step === 2 && (
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{marginTop: 40, marginBottom: 80}}>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 24}}>
              차량 제조국과 제조사를
            </Text>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 24}}>
              선택해주세요.
            </Text>
          </View>
          <View>
            <Text style={{...styles.text, fontSize: 18}}>차량 제조국</Text>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 20,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  ...styles.madeCountry,
                  marginRight: 10,
                  borderColor: userCarCountry === '국산' ? '#FFC500' : 'white',
                }}
                onPress={() => setUserCarCountry('국산')}>
                <Text
                  style={{
                    ...styles.madeCountryText,
                    color: userCarCountry === '국산' ? '#FFC500' : 'white',
                  }}>
                  국산
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.madeCountry,
                  marginLeft: 10,
                  borderColor: userCarCountry === '수입' ? '#FFC500' : 'white',
                }}
                onPress={() => setUserCarCountry('수입')}>
                <Text
                  style={{
                    ...styles.madeCountryText,
                    color: userCarCountry === '수입' ? '#FFC500' : 'white',
                  }}>
                  수입
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{...styles.text, fontSize: 18}}>차량 제조사</Text>
              {userCarCountry === '' ? (
                <View style={{marginVertical: 20}}>
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 12,
                      color: '#FFC500',
                    }}>
                    차량 제조국을 먼저 선택해주세요.
                  </Text>
                </View>
              ) : (
                <View style={{paddingVertical: 20}}>
                  <View style={styles.picker}>
                    {/* 기타(직접입력) 만들기 */}
                    {userCarCountry === '국산' ? (
                      <Picker
                        selectedValue={userCarMFR}
                        onValueChange={(itemValue, itemIndex) =>
                          setuserCarMFR(itemValue)
                        }
                        dropdownIconColor="white"
                        selectionColor="white">
                        <Picker.Item
                          style={styles.pickerItem}
                          label="현대"
                          value="현대"
                        />
                        <Picker.Item
                          style={styles.pickerItem}
                          label="기아"
                          value="기아"
                        />
                        <Picker.Item
                          style={styles.pickerItem}
                          label="제네시스"
                          value="제네시스"
                        />
                        <Picker.Item
                          style={styles.pickerItem}
                          label="한국GM"
                          value="한국GM"
                        />
                        <Picker.Item
                          style={styles.pickerItem}
                          label="르노삼성"
                          value="르노삼성"
                        />
                        <Picker.Item
                          style={styles.pickerItem}
                          label="쌍용"
                          value="쌍용"
                        />
                      </Picker>
                    ) : (
                      <Picker
                        selectedValue={userCarMFR}
                        onValueChange={(itemValue, itemIndex) =>
                          setuserCarMFR(itemValue)
                        }
                        dropdownIconColor="white"
                        selectionColor="white">
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
                    )}
                  </View>
                </View>
              )}
            </View>
          </View>
          <TouchableOpacity
            style={styles.resisterBtn}
            onPress={() => nextStep()}>
            <Text style={styles.button}>계속하기</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 3 && (
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{marginTop: 40, marginBottom: 80}}>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 24}}>
              차량 모델 이름과 연식을
            </Text>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 24}}>
              입력해주세요.
            </Text>
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={{...styles.text, fontSize: 18}}>차량 모델</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="차량 모델명을 입력해주세요"
              placeholderTextColor={'gray'}
              value={userCarModel}
              onChangeText={setuserCarModel}
              returnKeyType="next"
              autoFocus
            />
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={{...styles.text, fontSize: 18}}>차량 연식</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="YYYY로 입력해주세요"
              placeholderTextColor={'gray'}
              value={userCarYear}
              onChangeText={setuserCarYear}
              keyboardType="number-pad"
              maxLength={4}
              autoFocus
            />
          </View>
          {userCarModel !== '' && userCarYear.length === 4 ? (
            <TouchableOpacity
              style={{...styles.resisterBtn, backgroundColor: '#FFC500'}}
              onPress={() => nextStep()}>
              <Text style={{...styles.text, color: 'black'}}>계속하기</Text>
            </TouchableOpacity>
          ) : (
            <View style={{...styles.resisterBtn, backgroundColor: 'gray'}}>
              <Text style={{...styles.text, color: 'white', fontSize: 16}}>
                계속하기
              </Text>
            </View>
          )}
        </View>
      )}
      {step === 4 && (
        <View style={{...styles.container, paddingHorizontal: 20}}>
          <View style={{marginTop: 40, marginBottom: 80}}>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 24}}>
              차량 소유주와의 관계를
            </Text>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 24}}>
              선택해주세요.
            </Text>
          </View>
          <View style={styles.picker}>
            <Picker
              selectedValue={userRelation}
              onValueChange={(itemValue, itemIndex) =>
                setuserRelation(itemValue)
              }
              dropdownIconColor="white"
              selectionColor="white">
              <Picker.Item
                style={styles.pickerItem}
                label="본인"
                value="본인"
              />
              <Picker.Item
                style={styles.pickerItem}
                label="배우자"
                value="배우자"
              />
              <Picker.Item
                style={styles.pickerItem}
                label="부모"
                value="부모"
              />
              <Picker.Item
                style={styles.pickerItem}
                label="형제/자매"
                value="형제/자매"
              />
            </Picker>
          </View>
          {userRelation !== '' ? (
            <TouchableOpacity
              style={{...styles.resisterBtn, backgroundColor: '#FFC500'}}
              onPress={() => {
                nextStep();
              }}>
              <Text style={{...styles.text, color: 'black'}}>계속하기</Text>
            </TouchableOpacity>
          ) : (
            <View style={{...styles.resisterBtn, backgroundColor: 'gray'}}>
              <Text style={{...styles.text, color: 'black'}}>계속하기</Text>
            </View>
          )}
        </View>
      )}
      {step === 5 && (
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginTop: 80, marginBottom: 80, alignItems: 'center'}}>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 20}}>
              브랜드 서포터가 될
            </Text>
            <Text style={{...styles.text, fontWeight: 'bold', fontSize: 20}}>
              모든 준비가 완료되었습니다!
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderColor: '#FFC500',
              borderWidth: 1,
              borderRadius: 20,
              marginVertical: 40,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
            onPress={() => {
              storeCarInfo(carInfo);
              console.log(carInfo);
            }}>
            <Text
              style={{...styles.text, textAlign: 'center', color: '#FFC500'}}>
              시작하기
            </Text>
          </TouchableOpacity>
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
  text: {
    fontFamily: 'BlackHanSans-Regular',
    color: 'white',
  },
  input: {
    width: '100%',
    fontSize: 17,
    marginBottom: 10,
    borderColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
  },
  picker: {
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  pickerItem: {
    fontSize: 14,
    color: 'black',
  },
  madeCountry: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFC500',
  },
  madeCountryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
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
});

export default ResisterCarInfo;
