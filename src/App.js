import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Route from './Route';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  navIcon: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
