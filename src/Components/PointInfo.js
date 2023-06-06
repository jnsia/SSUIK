import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const PointInfo = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomWidth: 0.25,
          borderColor: 'gray',
        }}>
        <View>
          <Text style={styles.text}>{props.title}</Text>
          <Text style={{...styles.text, color: 'gray', fontSize: 12}}>
            {props.time}
          </Text>
        </View>
        {props.type === 'withdraw' ? (
          <Text style={{...styles.text, color: 'white'}}>
            -{props.point}POINT
          </Text>
        ) : (
          <Text style={{...styles.text, color: '#FFC500'}}>
            +{props.point}POINT
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'Pretendard-regular',
    color: 'white',
    fontSize: 14,
  },
});

export default PointInfo;
