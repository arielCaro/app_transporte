import React from 'react';
import { Image, Dimensions, View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button  from '../components/Button';

const Welcome = ({navigation}) => {
    return (
      
        <LinearGradient
                  style={{
                    flex:1
                  }}
                  colors={[COLORS.backgraundColor, COLORS.backgraundColor2]}>
          
          <View style={{ flex:1 }}>
            <View> 
              <Image source= {require("../assets/icon.png")} style={{
                height:100, width: 100, borderRadius: 20, position:'absolute', top:10, transform: [
                  { translateX: 20}, {translateY: 50}, {rotate: "-15deg"} 
                ]
              }}/>        
              <Image source= {require("../assets/adaptive-icon.png")} style={{
                height:100, width: 100, borderRadius: 20, position:'absolute', top:-30, left:100, transform: [
                  { translateX: 50}, {translateY: 50}, {rotate: "-5deg"} 
                ]
              }}/>  
              <Image source= {require("../assets/adaptive-icon.png")} style={{
                height:200, width: 200, borderRadius: 20, position:'absolute', top:110, left:100, transform: [
                  { translateX: 50}, {translateY: 50}, {rotate: "-15deg"} 
                ]
              }}/>  
            </View>
            <View style={{
                  paddingHorizontal:22,
                  position: "absolute",
                  top:400,
                  width:"100%"
                  }}>
                  <Text style={{
                    fontSize:50, 
                    fontWeight:800,
                    color: COLORS.white
                  }}>Bienvenido a  </Text>
                  <Text style={{
                    fontSize:30, 
                    fontWeight:800,
                    color: COLORS.white
                  }}>Gestión CT </Text>
                  
                  <Button onPress={()=>navigation.navigate("Signup")}
                          title= "Comenzar" 
                          style={{marginTop:30, width:"100%"}}  
                          />
                   <View style={{
                        flexDirection:"row",
                        marginTop:12,
                        justifyContent: "center"
                  }}>
                    <Text style={{
                      fontSize:16,
                      color: COLORS.white,

                    }}>¿Desea crear una cuenta ? </Text>
                    <Pressable onPress={()=>navigation.navigate("Login")}> 
                      
                    
                      <Text style={{
                        fontSize:16,
                        color: COLORS.white,
                        fontWeight:"bold"
                      }}>Login</Text>
                    </Pressable>
                  </View>
            </View>  
          </View>  
      
        </LinearGradient>
    )
}

export default Welcome;