import  { View, Text, TextInput, Image, Pressable, StatusBar, ImageBackground,StyleSheet } from 'react-native';
import React , {useState} from 'react';
import {SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"; 
import Button from '../components/Button';

const Login = ({navigation}) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
      <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
        <StatusBar />
        <ImageBackground source={require('../assets/fondo.jpg')} 
                         imageStyle={{ opacity:0.3}} 
                         style={{padding:30, height: '100%', resizeMode: 'cover' }}>
        <View style={{ flex:1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
                <Text style={{
                    fontSize: 24, fontWeight: "bold", marginVertical:12, color: COLORS.black
                }}> Bienvenido a </Text>
                <Text style={{fontSize:14, color: COLORS.black}}>
                    Gestión de Transporte y Carga
                </Text>
                <Text style={{fontSize:14, color: COLORS.black}}>
                    ingrese sus datos
                </Text>
                <Image source={require('../assets/wellcome.png')} style={styles.tinyLogo}></Image>
            </View>

            <View style={{ marginBottom: 12}}>
                <Text style={{
                    fontSize:16,
                    fontWeight: 400,
                    marginVertical: 8
                    }}> Email </Text>
                <View style={{
                    width:'100%',
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft:22
                }}>
                    <TextInput placeholder='Ingrese su email' 
                               placeholderTextColor={COLORS.black} 
                               keyboardType='email-address'
                               style={{ width: "100%" 

                               }}/>
                </View>
            </View>

            <View style={{ marginBottom: 12}}>
                <Text style={{
                    fontSize:16,
                    fontWeight: 400,
                    marginVertical: 8
                    }}> Contraseña </Text>
                <View style={{
                    width:'100%',
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft:22
                }}>
                    <TextInput placeholder='Ingrese una contraseña' 
                               placeholderTextColor={COLORS.black}                                
                               style={{ width: "100%" 

                               }} 
                               secureTextEntry={isPasswordShow}/>
                    <TouchableOpacity onPress={()=> setIsPasswordShow(!isPasswordShow)}  
                                      style={{
                                            position: "absolute",
                                            right: 12
                                        }}> 
                       { 
                            isPasswordShow == true ? (
                                <Ionicons  name="eye-off" size={24} color={COLORS.black} />
                            ) : (
                                <Ionicons  name="eye" size={24} color={COLORS.black} />
                            )
                       }
                        
                    </TouchableOpacity>
                </View>
            </View>
            

             
            <Button onPress={()=> navigation.navigate("Home")}
                    title="Iniciar" 
                    filled 
                    style={{
                    marginTop:25,
                    marginBottom: 10
            }}/>

            <View style={{flexDirection: 'row', 
                          alignItems: 'center',
                          marginVertical: 20
            }}>

                <View style={{ flex:1, height: 1, backgroundColor: COLORS.grey, marginHorizontal: 10 }} />
                <Text style={{ fontSize: 14 }}> o inicia con </Text>
                <View style={{ flex:1, height: 1, backgroundColor: COLORS.grey, marginHorizontal: 10 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={ () => console.log('Prossed')} 
                                  style={{ flex:1,
                                           alignItems: 'center',
                                           justifyContent: 'center',
                                           flexDirection: 'row',
                                           height: 52,
                                           borderWidth: 1, 
                                           borderColor: COLORS.black,
                                           marginRight: 4, 
                                           borderRadius: 10

                                  }}>
                    <Image source={require('../assets/Google__G__logo.svg.png')} 
                           style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                           }}
                           resizeMode='contain'
                           />
                        <Text>Google</Text>

                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 22
            }}>
                <Text style={{fontSize:16, color:COLORS.black}}>Crear una </Text>
                <Pressable onPress={()=> navigation.navigate("Signup")}>
                    <Text style={{ fontSize:16, color: COLORS.primary, fontWeight:'bold', marginLeft:6 }}> Cuenta</Text>  
                </Pressable>
            </View>

        </View>
        </ImageBackground>
        
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

export default Login;