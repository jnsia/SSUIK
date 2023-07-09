import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useFocusEffect} from '@react-navigation/native';

const ServiceCenter = ({navigation}) => {
  const [faq, setFaq] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setFaq(0);
    }, []),
  );

  return (
    <View style={styles.container}>
      <ScrollView style={{marginVertical: 40, marginHorizontal: 20}}>
        <TouchableOpacity
          style={styles.faq}
          onPress={() => {
            if (faq === 0) {
              setFaq(1);
            } else {
              setFaq(0);
            }
          }}>
          <Text style={{...styles.text, color: 'white'}}>
            Q. 광고 신청 후에는 어떻게 하나요?
          </Text>
          <Icon
            name={faq === 1 ? 'chevron-up' : 'chevron-down'}
            color={'white'}
            size={25}
          />
        </TouchableOpacity>
        {faq === 1 && (
          <View>
            <Text style={styles.text}></Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.faq}
          onPress={() => {
            if (faq === 0) {
              setFaq(2);
            } else {
              setFaq(0);
            }
          }}>
          <Text style={{...styles.text, color: 'white'}}>
            Q. 스티커가 손상 또는 분실되었어요.
          </Text>
          <Icon
            name={faq === 2 ? 'chevron-up' : 'chevron-down'}
            color={'white'}
            size={25}
          />
        </TouchableOpacity>
        {faq === 2 && (
          <View>
            <Text style={styles.text}></Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.faq}
          onPress={() => {
            if (faq === 0) {
              setFaq(3);
            } else {
              setFaq(0);
            }
          }}>
          <Text style={{...styles.text, color: 'white'}}>
            Q. 스티커는 언제 떼나요?
          </Text>
          <Icon
            name={faq === 3 ? 'chevron-up' : 'chevron-down'}
            color={'white'}
            size={25}
          />
        </TouchableOpacity>
        {faq === 3 && (
          <View>
            <Text style={styles.text}></Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.faq}
          onPress={() => {
            if (faq === 0) {
              setFaq(4);
            } else {
              setFaq(0);
            }
          }}>
          <Text style={{...styles.text, color: 'white'}}>
            Q. 스티커 신청 후, 얼마 만에 등록해야 하나요?
          </Text>
          <Icon
            name={faq === 4 ? 'chevron-up' : 'chevron-down'}
            color={'white'}
            size={25}
          />
        </TouchableOpacity>
        {faq === 4 && (
          <View>
            <Text style={styles.text}></Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.faq}
          onPress={() => {
            if (faq === 0) {
              setFaq(5);
            } else {
              setFaq(0);
            }
          }}>
          <Text style={{...styles.text, color: 'white'}}>
            Q. 다른 광고로 교체하고 싶어요.
          </Text>
          <Icon
            name={faq === 5 ? 'chevron-up' : 'chevron-down'}
            color={'white'}
            size={25}
          />
        </TouchableOpacity>
        {faq === 5 && (
          <View>
            <Text style={styles.text}></Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.faq}
          onPress={() => {
            if (faq === 0) {
              setFaq(6);
            } else {
              setFaq(0);
            }
          }}>
          <Text style={{...styles.text, color: 'white'}}>
            Q. 스티커 부착은 어떻게 하나요?
          </Text>
          <Icon
            name={faq === 6 ? 'chevron-up' : 'chevron-down'}
            color={'white'}
            size={25}
          />
        </TouchableOpacity>
        {faq === 6 && (
          <View>
            <Text style={styles.text}></Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.faq}
          onPress={() => {
            if (faq === 0) {
              setFaq(7);
            } else {
              setFaq(0);
            }
          }}>
          <Text style={{...styles.text, color: 'white'}}>
            Q. 출금 신청하면 언제 입금되나요?
          </Text>
          <Icon
            name={faq === 7 ? 'chevron-up' : 'chevron-down'}
            color={'white'}
            size={25}
          />
        </TouchableOpacity>
        {faq === 7 && (
          <View style={styles.context}>
            <View>
              <Text style={{...styles.text, color: '#FFC500'}}>
                출금 신청을 하시면, 통상 2~3일 내에
              </Text>
              <Text style={{...styles.text, color: '#FFC500'}}>
                입금 처리 됩니다. 출금 신청을 하시고,
              </Text>
              <Text style={{...styles.text, color: '#FFC500'}}>
                조금만 기다려주세요.
              </Text>
            </View>
          </View>
        )}
        <TouchableOpacity
          style={styles.faq}
          onPress={() => {
            if (faq === 0) {
              setFaq(8);
            } else {
              setFaq(0);
            }
          }}>
          <Text style={{...styles.text, color: 'white'}}>
            Q. 회원탈퇴는 어떻게 하나요?
          </Text>
          <Icon
            name={faq === 8 ? 'chevron-up' : 'chevron-down'}
            color={'white'}
            size={25}
          />
        </TouchableOpacity>
        {faq === 8 && (
          <View>
            <Text style={styles.text}></Text>
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        style={{...styles.btn, backgroundColor: '#FFC500'}}
        onPress={() => navigation.push('Inquire')}>
        <Text style={{...styles.text, color: 'white', fontSize: 18}}>
          1:1 문의하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  text: {
    fontFamily: 'BlackHanSans-Regular',
    color: 'white',
    fontSize: 16,
  },
  faq: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  context: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  btn: {
    bottom: 20,
    width: '100%',
    padding: 15,
    backgroundColor: '#FFC500',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ServiceCenter;
