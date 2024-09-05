import  { View, Text, TextInput } from 'react-native';
import React , {useState} from 'react';
import {SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"; 
import Checkbox from 'expo-checkbox'; 
import Button from '../components/Button';
const Signup = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
      <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
        <View style={{ flex:1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
                <Text style={{
                    fontSize: 24, fontWeight: "bold", marginVertical:12, color: COLORS.black
                }}> Crear Cuenta </Text>
                <Text style={{fontSize:14, color: COLORS.black}}>
                    Gestión de Transporte y Carga
                </Text>
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
                        }}> N° Movil </Text>
                <View style={{
                    width:'100%',
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft:22
                }}>
                    <TextInput placeholder=' +56' 
                               placeholderTextColor={COLORS.black} 
                               keyboardType='numeric'
                               style={{ width: "12%", 
                                        borderRightWidth: 1, 
                                        borderLeftColor: COLORS.grey,
                                        height: '100%'
                               }}/>
                    <TextInput placeholder='Ingrese su N° Movil' 
                               placeholderTextColor={COLORS.black} 
                               keyboardType='numeric'
                               style={{ width: "80%", 
                                       
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

            <View style={{ marginBottom: 12}}>
                <Text style={{
                    fontSize:16,
                    fontWeight: 400,
                    marginVertical: 8
                    }}> Confirma Contraseña </Text>
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
                    <TextInput placeholder='Confirme la contraseña' 
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

            <View style={{ 
                flexDirection: 'row',
                marginVertical: 6
            }}>

                <Checkbox style={{
                    marginRight: 8,
                }}  value={isChecked} 
                    onValueChange={setIsChecked}
                    color={isChecked? COLORS.primary : undefined} />

                <Text>Acepta los terminos y las condiciones </Text>

            </View>

            <Button title="Siguiente" filled style={{
                marginTop:25,
                marginBottom: 10
            }}/>



        </View>
      </SafeAreaView>
    )
}

export default Signup;