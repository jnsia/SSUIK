import {View, Text, Switch, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const ToggleButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#555555', true: '#FFC500'}}
        thumbColor={isEnabled ? '#white' : 'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ToggleButton;
