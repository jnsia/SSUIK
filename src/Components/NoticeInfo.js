import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const NoticeInfo = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'black',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Icon
            name={props.icon}
            color={'#FFD500'}
            size={20}
            style={{marginRight: 10}}
          />
          <Text
            style={{
              ...styles.text,
              color: 'white',
              fontSize: 16,
            }}>
            {props.main}
          </Text>
        </View>
        <Text
          style={{
            ...styles.text,
            color: 'white',
            paddingBottom: 15,
            fontSize: 13,
          }}>
          {props.sub}
        </Text>
        <Text style={{...styles.text, color: 'grey', paddingBottom: 10}}>
          {props.time}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'BlackHanSans-Regular',
  },
});

export default NoticeInfo;
