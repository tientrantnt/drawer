import React from 'react';
import { Image,StyleSheet } from 'react-native';
import { Block, Text, Button } from 'expo-ui-kit';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerItem, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View animated style={[{flex:1},style]}>
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <Button transparent padding marginHorizonal onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={18} />
          </Button>
        )
      }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </Animated.View>
  );
}

// custom drawer menu
// style the drawer menu
const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Block>
        <Block>
          <Image source={{
            uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
            height: 60,
            width: 60
          }}
            resizeMode="center"
            style={{ borderRadius: 30 }}
          />
          <Text title>React UI Kit</Text>
          <Text size={9}>contact@react-native.com</Text>
        </Block>
        <DrawerItem
          label="Dashboard"
          labelStyle={{ marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Dashboard")}
          icon={() => <AntDesign name="dashboard" size={16} />}
        />
        <DrawerItem
          label="Messages"
          labelStyle={{ marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Messages")}
          icon={() => <AntDesign name="message1" size={16} />}
        />
        <DrawerItem
          label="Contact"
          labelStyle={{ marginLeft: -16 }}
          onPress={() => props.navigation.navigate("Contact")}
          icon={() => <AntDesign name="phone" size={16} />}
        />
      </Block>
    </DrawerContentScrollView>
  );
}
export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress,{
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  })
  return (
    <Drawer.Navigator 
    // the drawer ->screen animated should be slide
    drawerType="slide"
    overlayColor="transparent"
    initialRouteName="Dashboard"
    contentContainerStyle={{ flex: 1 }}
    drawerContentOptions={{
      activeBackgroundColor: 'transparent',
      activeTintColor: 'white',
      inactiveTintColor: 'white',
    }}
    sceneContainerStyle={{ backgroundColor: 'transparent' }}
    drawerContent={props => {
        setProgress(props.progress);
        return <DrawerContent {...props} />;
      }}
    >
      <Drawer.Screen name="Screens" component={Screens} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
 
});