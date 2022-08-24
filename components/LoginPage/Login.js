import { Text, View, Image, Button, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Styles.js';
import { 
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_900Black 
  } from '@expo-google-fonts/cairo'
  import { 
    Iceberg_400Regular 
  } from '@expo-google-fonts/iceberg'
import { useFonts } from 'expo-font';
import LoginButton from '../NavButton/LoginButton.js';

const LoginPage = (props) => {
    const [fontsLoaded, error] = useFonts({
        "Cairo": Cairo_400Regular,
        "Iceberg": Iceberg_400Regular,
    });
    return (
        <KeyboardAvoidingView style={styles.pageContainer} behavior="padding">
            <View style={styles.pageContainer}>
                <LinearGradient colors= {['#f55536','#fabc3c']} start={{x: 1.0, y: 0.0}} end={{x: 0.0, y: 1.0}} style={styles.background}/> 
                    <View style={styles.imageWrapper}>
                        <Image source={require('../../assets/images/backbutton.png')} style={styles.logo}/>
                    </View>
                    <View style={{height: 84}}/>
                    <Text style={styles.title}>My Gym Bro</Text>
                    <View style={{ height:10 }}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.subtext} adjustsFontSizeToFit={true} numberOfLines={3}>{'\n'} Welcome Back</Text>
                    </View>
                        <Text style={styles.aboveField}> Email</Text>
                        <TextInput
                            placeholder="Email"
                            //   value={}
                            //   onChangeText={text =>}
                            style={styles.input}/>
                        <View style={{justifyContent: 'center', alignItems: 'center',}}>
                        <View style={styles.inputField}>
                            <View
                                style={{
                                width: 298,
                                borderWidth: 0.6,
                                borderColor:'black',
                                margin:3,
                                }}
                            />
                    </View>
                    </View>
                          <TextInput
                          placeholder="Password"
                        //   value={}
                        //   onChangeText={text =>} 
                          style={styles.input}
                          secureTextEntry/>
                          
                        <View style={{height: 132}}/>
                        <LoginButton transparent={false} content='Login' />
                        <View style={{height:10}}/>
                        <LoginButton transparent={true} content='Register' />
                        
            </View>
        </KeyboardAvoidingView>
    );
};
export default LoginPage; 