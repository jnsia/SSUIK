import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-bouncy-checkbox';

const Permission = () => {
  const [toggleAll, setToggleAll] = useState(false);

  // const [toggleTerm, setToggleTerm] = useState(false);
  // const [toggleInfoCollect, setToggleInfoCollect] = useState(false);
  // const [toggleLocation, setToggleLocation] = useState(false);
  // const [toggleInfoProvide, setToggleInfoProvide] = useState(false);
  // const [toggleIsAge, setToggleIsAge] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 28, fontWeight: '600', paddingVertical: 10}}>
            SSUIK 이용약관
          </Text>
          <Text style={{color: '#FF9500', fontSize: 16}}>
            서비스 이용을 위한 약관동의가 필요합니다.
          </Text>
        </View>
        <View style={{marginBottom: 40}}>
          <CheckBox
            style={{paddingVertical: 20, borderBottomWidth: 1}}
            isChecked={toggleAll}
            onPress={() => setToggleAll()}
            text="전체 약관 동의 (필수)"
          />
          <CheckBox
            style={{paddingTop: 20}}
            isChecked={toggleAll}
            onPress={() => setToggleAll()}
            text="이용 약관 동의 (필수)"
          />
          <CheckBox
            style={{paddingTop: 20}}
            isChecked={toggleAll}
            onPress={() => setToggleAll()}
            text="개인정보 수집 이용 동의 (필수)"
          />
          <CheckBox
            style={{paddingTop: 20}}
            isChecked={toggleAll}
            onPress={() => setToggleAll()}
            text="위치기반 서비스 이용 동의 (필수)"
          />
          <CheckBox
            style={{paddingTop: 20}}
            isChecked={toggleAll}
            onPress={() => setToggleAll()}
            text="개인정보 3자 제공 (필수)"
          />
          <CheckBox
            style={{paddingTop: 20}}
            isChecked={toggleAll}
            onPress={() => setToggleAll()}
            text="만 18세 이상 확인 (필수)"
          />
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
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>동의하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Permission;
