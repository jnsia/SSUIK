import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CollectionInfo = () => {
  return (
    <View>
      <Text>CollectionInfo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  adsCollectionFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
});

export default CollectionInfo;
