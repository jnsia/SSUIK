import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';

const Refund = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: 'black',
          paddingVertical: 30,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text style={{color: 'white', fontSize: 36, fontWeight: '500'}}>
          32,005원
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            적립 예정: 20,000원 ▶
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 20}}>
        <View style={styles.refundPoint}>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            보유 포인트
          </Text>
          <View style={styles.refundPointText}>
            <Text style={styles.refundPointInputText}>32,005</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>원</Text>
          </View>
        </View>
        <View style={styles.refundPoint}>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            환급신청 금액
          </Text>
          <View style={styles.refundPointText}>
            <TextInput
              style={styles.refundPointInputText}
              autoCapitalize="none"
              placeholder="직접입력"
              keyborardType="numeric"
            />
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>원</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.plusCreditBox}>
          {/* TextInput과 useState */}
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderEndWidth: 0.5,
            }}>
            <Text>+1천</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plusCredit}>
            <Text>+1만</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plusCredit}>
            <Text>+5만</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderStartWidth: 0.5,
            }}>
            <Text>+10만</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: 'right',
            marginHorizontal: 40,
            marginVertical: 5,
          }}>
          (1천 단위로 환급 가능합니다.)
        </Text>
      </View>
      <View style={{marginVertical: 10, marginHorizontal: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>환급계좌</Text>
        <View style={{flexDirection: 'row', marginVertical: 20}}>
          {/* picker 쓰자 */}
          <TextInput
            style={{
              flex: 1,
              backgroundColor: 'lightgrey',
              marginHorizontal: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
            autoCapitalize="none"
            placeholder="은행 선택"
          />
          <TextInput
            style={{
              flex: 2,
              backgroundColor: 'lightgrey',
              marginHorizontal: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
            autoCapitalize="none"
            placeholder="계좌번호"
            keyborardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.refundBtn}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          환급 신청
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  refundPoint: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  refundPointText: {
    flex: 1,
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  refundPointInputText: {
    width: '100%',
    margin: 0,
    padding: 0,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: 'lightgrey',
    textAlign: 'right',
  },
  plusCreditBox: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  plusCredit: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderStartWidth: 0.5,
    borderEndWidth: 0.5,
  },
  refundBtn: {
    backgroundColor: '#FF9500',
    marginBottom: 20,
    marginHorizontal: 40,
    borderRadius: 10,
    padding: 10,
  },
});

export default Refund;
