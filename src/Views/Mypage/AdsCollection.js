import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const collectionInfo = [
  {
    title: 'Bad Blue',
  },
];

const AdsCollection = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.adsCollectionFilter}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>컬렉션 12개</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>▩</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.adsCollectionBox}>
          <Image
            style={styles.adsCollectionImage}
            source={require('../../Images/brand-img-test.png')}
          />
          <View style={styles.adsCollectionInfo}>
            <View style={{padding: 20, flex: 1}}>
              <Text style={{fontSize: 18}}>SSUIK</Text>
            </View>
            <View style={{padding: 20}}>
              <Text>2022.12.02 ~ 2023.01.03</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.adsCollectionBox}>
          <Image
            style={styles.adsCollectionImage}
            source={require('../../Images/brand-img-test.png')}
          />
          <View style={styles.adsCollectionInfo}>
            <View style={{padding: 20, flex: 1}}>
              <Text style={{fontSize: 18}}>FILA KOREA</Text>
            </View>
            <View style={{padding: 20}}>
              <Text>2022.10.15 ~ 2022.11.30</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.adsCollectionBox}>
          <Image
            style={styles.adsCollectionImage}
            source={require('../../Images/brand-img-test.png')}
          />
          <View style={styles.adsCollectionInfo}>
            <View style={{padding: 20, flex: 1}}>
              <Text style={{fontSize: 18}}>페브리즈</Text>
            </View>
            <View style={{padding: 20}}>
              <Text>2021.10.15 ~ 2021.11.30</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  adsCollectionFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  adsCollectionBox: {flexDirection: 'row', flex: 1, borderBottomWidth: 1},
  adsCollectionImage: {
    flex: 1,
    height: 200,
    padding: 5,
    resizeMode: 'center',
  },
  adsCollectionInfo: {
    flex: 1,
    borderStartWidth: 1,
  },
});

export default AdsCollection;
