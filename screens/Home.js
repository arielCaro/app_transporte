import { StyleSheet, Dimensions, ScrollView, View, Text, Button } from 'react-native';
import React , {useState} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
    
    return (
        
        <MyTabs />
    );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#1e21e9"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: '#11138f' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="scanner" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'OT',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Feed({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido!</Text>
      <Button onPress={()=> navigation.navigate("Login")}
                    title="Login" 
                    filled 
                    style={{
                    marginTop:25,
                    marginBottom: 10
            }}/>
    </View>
  );
}

function Profile({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Orden de trabajo!</Text>
      <Button onPress={()=> navigation.navigate("Login")}
                    title="Login" 
                    filled 
                    style={{
                    marginTop:25,
                    marginBottom: 10
            }}/>
    </View>
  );
}

function Notifications({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Scanner de Guia de Orden de trabajo!</Text>
      <Button onPress={()=> navigation.navigate("Login")}
                    title="Login" 
                    filled 
                    style={{
                    marginTop:25,
                    marginBottom: 10
            }}/>
    </View>
  );
}


function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Scanner' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Orden de Trabajo' }}
      />
    </Drawer.Navigator>
  );
}

export default Home;