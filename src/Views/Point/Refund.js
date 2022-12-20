import {View, Text, Button} from 'react-native';
import React from 'react';
import Header from '../Components/Header';

const Refund = ({navigation}) => {
  return (
    <View>
      <Header />
      <Text>Refund</Text>
      <Button title="포인트" onPress={() => navigation.navigate('Point')} />
    </View>
  );
};

export default Refund;
