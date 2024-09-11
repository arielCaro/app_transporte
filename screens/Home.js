import { StyleSheet, Dimensions, ScrollView, View, Text, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import React , {useState} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import COLORS from '../constants/colors';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"; 
import Button from '../components/Button';

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
      initialRouteName="HomeScreen"
      activeColor="#1e21e9"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: '#11138f' }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ScannerScreen"
        component={ScannerScreen}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="scanner" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderWorkScreen"
        component={OrderWorkScreen}
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

function HomeScreen({navigation}) {
  return (

    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
    <StatusBar />
      <ImageBackground source={require('../assets/fondo.jpg')} 
                      imageStyle={{ opacity:0.3}} 
                      style={{padding:30, height: '100%', resizeMode: 'cover' }}>
          <View style={{ flex:1, marginHorizontal: 22 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Bienvenido a su sesion!</Text>


            </View>
            <Button onPress={()=> navigation.navigate("Login")}
                            title="Login" 
                            filled 
                            style={{
                            marginTop:25,
                            marginBottom: 10,
                            height:'100%'
                    }}/>
          </View>
          
      </ImageBackground>
      
    </SafeAreaView>

    
  );
}

function ScannerScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
    <StatusBar />
      <ImageBackground source={require('../assets/fondo.jpg')} 
                      imageStyle={{ opacity:0.3}} 
                      style={{padding:30, height: '100%', resizeMode: 'cover' }}>
          <View style={{ flex:1, marginHorizontal: 22 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Scanner de Orden de trabajo!</Text>
            </View>
            <Button onPress={()=> navigation.navigate("Login")}
                            title="Login" 
                            filled 
                            style={{
                            marginTop:25,
                            marginBottom: 10,
                            height:'100%'
                    }}/>
          </View>
          
      </ImageBackground>
      
    </SafeAreaView>
  );
}

function OrderWorkScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
    <StatusBar />
      <ImageBackground source={require('../assets/fondo.jpg')} 
                      imageStyle={{ opacity:0.3}} 
                      style={{padding:30, height: '100%', resizeMode: 'cover' }}>
          <View style={{ flex:1, marginHorizontal: 22 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Ingresar una Orden de trabajo</Text>
            </View>
            <Button onPress={()=> navigation.navigate("Login")}
                            title="Login" 
                            filled 
                            style={{
                            marginTop:25,
                            marginBottom: 10,
                            height:'100%'
                    }}/>
          </View>
          
      </ImageBackground>
      
    </SafeAreaView>
  );
}


function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="ScannerScreen"
        component={ScannerScreen}
        options={{ drawerLabel: 'Scanner' }}
      />
      <Drawer.Screen
        name="OrderWorkScreen"
        component={OrderWorkScreen}
        options={{ drawerLabel: 'Orden de Trabajo' }}
      />
    </Drawer.Navigator>
  );
}

export default Home;