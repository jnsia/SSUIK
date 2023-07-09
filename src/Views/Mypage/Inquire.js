import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useFocusEffect} from '@react-navigation/native';

const testHistory = {
  question: '출금 신청하면 언제 입금되는지 궁금해요',
  answer:
    '출금 신청을 하시면, 통상 2~3일 내에 입금 처리 됩니다. 출금 신청을 하시고, 조금만 기다려주세요.',
};

const Inquire = () => {
  const [inquire, setInquire] = useState(false);
  const [history, setHistory] = useState(false);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [faq, setFaq] = useState(7);

  useFocusEffect(
    useCallback(() => {
      setInquire(false);
    }, []),
  );

  return (
    <View style={styles.container}>
      {inquire ? (
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <View style={{paddingHorizontal: 20, marginVertical: 40}}>
            <Text
              style={{
                ...styles.text,
                paddingVertical: 5,
                fontSize: 20,
                fontWeight: 'bold',
                paddingHorizontal: 10,
              }}>
              문의 내용
            </Text>
            <View style={styles.input}>
              <TextInput
                style={styles.text}
                placeholder="제목을 입력하세요. (최대 80자)"
                placeholderTextColor={'gray'}
                value={title}
                onChangeText={setTitle}></TextInput>
            </View>
            <View style={{...styles.input, height: 300, marginTop: 10}}>
              <TextInput
                style={styles.text}
                multiline
                placeholder="문의 내용을 입력하세요. (최대 1500자)"
                placeholderTextColor={'gray'}
                value={content}
                onChangeText={setContent}></TextInput>
            </View>
            <TouchableOpacity
              style={{...styles.btn, backgroundColor: '#FFC500'}}
              onPress={() => {
                setHistory(true);
                setInquire(false);
              }}>
              <Text style={{...styles.text, color: 'white', fontSize: 18}}>
                저장하기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginBottom: 10,
            }}>
            <Text
              style={{
                ...styles.text,
                paddingVertical: 5,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              운영시간 안내
            </Text>
            <Text style={{...styles.text, paddingVertical: 5}}>
              접수시간 24시간 접수 가능
            </Text>
            <Text style={{...styles.text, paddingVertical: 5}}>
              답변시간 평일 11:00 ~ 18:00 (토, 일, 공휴일 휴무)
            </Text>
            <Text
              style={{
                ...styles.text,
                paddingVertical: 5,
                fontSize: 12,
                color: 'gray',
              }}>
              답변시간 이후 접수된 건은 운영시간 내 순차적으로 답변해드립니다.
            </Text>
            <TouchableOpacity
              style={{...styles.btn, backgroundColor: '#FFC500'}}
              onPress={() => setInquire(true)}>
              <Text style={{...styles.text, color: 'white', fontSize: 18}}>
                문의하기
              </Text>
            </TouchableOpacity>
          </View>
          {history ? (
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: 'black',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  ...styles.text,
                  paddingVertical: 5,
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginVertical: 20,
                }}>
                문의 내역
              </Text>
              <TouchableOpacity
                style={styles.faq}
                onPress={() => {
                  if (faq === 0) {
                    setFaq(7);
                  } else {
                    setFaq(0);
                  }
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{...styles.text, color: 'white', paddingRight: 10}}>
                    Q.
                  </Text>

                  <Text style={{...styles.text, color: 'white'}}>
                    {testHistory.question}
                  </Text>
                </View>
                <Icon
                  name={faq === 7 ? 'chevron-up' : 'chevron-down'}
                  color={'white'}
                  size={25}
                />
              </TouchableOpacity>
              {faq === 7 && (
                <View style={styles.context}>
                  <View style={{flexDirection: 'row', paddingRight: 80}}>
                    <Text
                      style={{
                        ...styles.text,
                        color: '#FFC500',
                        paddingRight: 10,
                      }}>
                      A.
                    </Text>
                    <Text style={{...styles.text, color: '#FFC500'}}>
                      {testHistory.answer}
                    </Text>
                  </View>
                </View>
              )}
            </ScrollView>
          ) : (
            <View
              style={{
                flex: 1,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.text}>문의하신 내역이 없습니다.</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'gray'},
  text: {
    fontFamily: 'BlackHanSans-Regular',
    color: 'white',
  },
  btn: {
    marginTop: 15,
    marginBottom: 5,
    width: '100%',
    padding: 10,
    backgroundColor: '#FFC500',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  faq: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  context: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Inquire;
