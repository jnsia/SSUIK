import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const ResisterCarInfo = ({navigation}) => {
  const [userCarNumber, setuserCarNumber] = useState('');
  const [userCarModel, setuserCarModel] = useState('');
  const [userCarMFR, setuserCarMFR] = useState('');
  const [userCarYear, setuserCarYear] = useState('');

  return (
    <ScrollView>
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
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              // justifyContent: 'space-around',
              marginBottom: 10,
            }}>
            <TouchableOpacity style={styles.madeCountry}>
              <Text style={styles.madeCountryText}>국산</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.madeCountry}>
              <Text style={styles.madeCountryText}>수입</Text>
            </TouchableOpacity>
          </View>
          {/* 버튼 포커스 선택 */}
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>제조사</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={userCarMFR}
              onValueChange={(itemValue, itemIndex) =>
                setuserCarMFR(itemValue)
              }>
              <Picker.Item
                style={styles.pickerItem}
                label="현대"
                value="hyundai"
              />
              <Picker.Item style={styles.pickerItem} label="기아" value="kia" />
            </Picker>
          </View>
        </View>
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
                value="myself"
              />
              <Picker.Item
                style={styles.pickerItem}
                label="자녀"
                value="children"
              />
            </Picker>
          </View>
        </View>
        <TouchableOpacity
          style={styles.resisterBtn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            시작하기
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
