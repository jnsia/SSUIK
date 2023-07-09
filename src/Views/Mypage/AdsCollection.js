import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CollectionInfo from '../../Components/CollectionInfo';
import {Picker} from '@react-native-picker/picker';

const collectionInfo = [
  {
    index: 2,
    title: 'Covernat',
    startTime: '2023.05.04',
    endTime: '2023.06.23',
    point: 33000,
  },
  {
    index: 1,
    title: 'YESEYESEE',
    startTime: '2023.03.20',
    endTime: '2023.04.29',
    point: 30000,
  },
  {
    index: 0,
    title: 'Bad Blue',
    startTime: '2023.02.02',
    endTime: '2023.03.01',
    point: 25000,
  },
];

const AdsCollection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.collectionFilter}>
        <Text style={styles.text}>찜하기 {collectionInfo.length}개</Text>
      </View>
      <ScrollView style={{marginHorizontal: 20, marginVertical: 20}}>
        {collectionInfo.map((info, k) => (
          <CollectionInfo
            index={info.index}
            title={info.title}
            startTime={info.startTime}
            endTime={info.endTime}
            point={info.point}
          />
        ))}
      </ScrollView>
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
  collectionFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  adsCollectionBox: {
    flexDirection: 'row',
    backgroundColor: '#444444',
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adsCollectionImage: {
    flex: 4,
    height: 75,
    padding: 5,
    resizeMode: 'contain',
  },
  adsCollectionInfo: {
    flex: 5,
    paddingVertical: 20,
  },
  pickerItem: {
    fontSize: 10,
  },
});

export default AdsCollection;
