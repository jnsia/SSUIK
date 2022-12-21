import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Point = ({navigation}) => {
  return (
    <View>
      <View style={styles.pointView}>
        <View style={styles.pointBox}>
          <Text style={{fontSize: 24, marginBottom: 20}}>나의 씤 포인트</Text>
          <Text style={{fontSize: 24, textAlign: 'right'}}>???? 원</Text>
        </View>
        <TouchableOpacity
          style={styles.pointViewList}
          onPress={() => navigation.push('Refund')}>
          <Text>환급 신청하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointViewList}
          onPress={() => navigation.push('Goods')}>
          <Text>상품 구매 및 교환</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pointView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 40,
  },
  pointBox: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 40,
  },
  pointViewList: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
});

export default Point;
