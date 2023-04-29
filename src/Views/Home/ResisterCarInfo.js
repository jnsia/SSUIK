import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
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

  let states = [
    userCarNumber,
    userCarCountry,
    userCarModel,
    userCarMFR,
    userCarYear,
  ];

  let carInfo = {
    carNumber: userCarNumber,
    carCountry: userCarCountry,
    carModel: userCarModel,
    carMFR: userCarMFR,
    carYear: userCarYear,
  };

  const storeCarInfo = async value => {
    for (let i = 0; i < states.length; i++) {
      console.log(states[i]);
      if (states[i] === '') {
        Alert.alert('정보 입력 부탁드립니다.');
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

  return (
    <View>
      {step === 1 && (
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
        </View>
      )}
      {step === 2 && (
        <View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>제조국</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={
                  userCarCountry === '국산'
                    ? styles.madeCountry
                    : styles.madeCountryFocus
                }
                onPress={() => setUserCarCountry('국산')}>
                <Text style={styles.madeCountryText}>국산</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  userCarCountry === '수입'
                    ? styles.madeCountry
                    : styles.madeCountryFocus
                }
                onPress={() => setUserCarCountry('수입')}>
                <Text style={styles.madeCountryText}>수입</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.resisterInputArea}>
              <Text style={{fontWeight: 'bold', padding: 10}}>제조사</Text>
              <View style={styles.picker}>
                {/* 기타(직접입력) 만들기 */}
                {userCarCountry === '국산' ? (
                  <Picker
                    selectedValue={userCarMFR}
                    onValueChange={(itemValue, itemIndex) =>
                      setuserCarMFR(itemValue)
                    }>
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
                    }>
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
          </View>
        </View>
      )}
      {step === 3 && (
        <View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>차량 모델</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="아반떼AD"
              value={userCarModel}
              onChangeText={setuserCarModel}
            />
          </View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>연식</Text>
            <TextInput
              autoCapitalize={'none'}
              style={styles.input}
              placeholder="2018"
              value={userCarYear}
              onChangeText={setuserCarYear}
            />
          </View>
        </View>
      )}
      {step === 4 && (
        <View>
          <View style={styles.resisterInputArea}>
            <Text style={{fontWeight: 'bold', padding: 10}}>
              차량소유주와의 관계
            </Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={userCarMFR}
                onValueChange={(itemValue, itemIndex) =>
                  setuserCarMFR(itemValue)
                }>
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
          </View>
          <TouchableOpacity
            style={styles.resisterBtn}
            onPress={() => {
              storeCarInfo(carInfo);
              console.log(carInfo);
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
              시작하기
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 5 && (
        <View>
          <TouchableOpacity
            style={styles.resisterBtn}
            onPress={() => {
              storeCarInfo(carInfo);
              console.log(carInfo);
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
              시작하기
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 14,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
  },
  picker: {
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    marginBottom: 10,
    paddingLeft: 5,
  },
  pickerItem: {
    fontSize: 14,
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
  madeCountryText: {
    textAlign: 'center',
    fontSize: 14,
  },
  resisterBtn: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    backgroundColor: '#FF9500',
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default ResisterCarInfo;
