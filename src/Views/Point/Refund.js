import {View, Text, Button} from 'react-native';
import React from 'react';

const Refund = ({navigation}) => {
  return (
    <View>
      <Text>Refund</Text>
      <Button title="포인트" onPress={() => navigation.navigate('Point')} />
    </View>
  );
};

export default Refund;
