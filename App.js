import React from 'react';
import {StyleSheet} from 'react-native';
import {Block,Text} from 'expo-ui-kit';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
export default () => {
  return (
    <NavigationContainer>
      <Drawer/>
      {/* <Block center middle>
        <Text>we're building Drawer</Text>
        <Text bold>react-navigation</Text>
      </Block> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});
