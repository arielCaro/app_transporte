import { StyleSheet, Dimensions, ScrollView, View, Text, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import React , {useState} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import ButtonGradient from '../components/ButtonGradient'
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get('window')
const Home = ({navigation}) => {
    
    return (
        
        <MyTabs />
    );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#b85602"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: '#fce9d2' }}
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

    <View style={styles.mainContainer}>
    
      <ImageBackground source={require('../assets/fondo.jpg')} 
                      imageStyle={{ opacity:0.3}} 
                      style={{ 
                          height: '100%', 
                          resizeMode: 'cover' }}>
          <View style={{ flex:1, marginHorizontal: 22 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Bienvenido a su sesion!</Text>


            </View>
            <View style={{ 
                            flexDirection: 'row',
                            marginVertical: 6,
                            justifyContent: 'center'
                        }}>
              <ButtonGradient title="Login" onPress={()=> navigation.navigate("Login")}/>
            </View>
          </View>
          
      </ImageBackground>
      
    </View>

    
  );
}

function ScannerScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
    
      <ImageBackground source={require('../assets/fondo.jpg')} 
                      imageStyle={{ opacity:0.3}} 
                      style={{ 
                          height: '100%', 
                          resizeMode: 'cover' }}>
          <View style={{ flex:1, marginHorizontal: 22 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Scanner de Ordenes de trabajo!</Text>


            </View>
            <View style={{ 
                            flexDirection: 'row',
                            marginVertical: 6,
                            justifyContent: 'center'
                        }}>
              <ButtonGradient title="Login" onPress={()=> navigation.navigate("Login")}/>
            </View>
          </View>
          
      </ImageBackground>
      
    </View>
  );
}

function OrderWorkScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
    
      <ImageBackground source={require('../assets/fondo.jpg')} 
                      imageStyle={{ opacity:0.3}} 
                      style={{ 
                          height: '100%', 
                          resizeMode: 'cover' }}>
          <View style={{ flex:1, marginHorizontal: 22 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Ordenes de trabajo!</Text>


            </View>
            <View style={{ 
                            flexDirection: 'row',
                            marginVertical: 6,
                            justifyContent: 'center'
                        }}>
              <ButtonGradient title="Login" onPress={()=> navigation.navigate("Login")}/>
            </View>
          </View>
          
      </ImageBackground>
      
    </View>
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

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#362612',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 15,
    fontWeight:'bold',
    marginLeft: 6
  },
  button: {

  },
  
});

export default Home;