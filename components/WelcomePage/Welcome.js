import { Text, View, Image, Button } from 'react-native'
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

const WelcomePage = (props) => {
    const [fontsLoaded, error] = useFonts({
        "Cairo": Cairo_400Regular,
        "Iceberg": Iceberg_400Regular,
    });
    return (
        <View style={styles.pageContainer}>
            <LinearGradient colors= {['#f55536','#fabc3c']} start={{x: 1.0, y: 0.0}} end={{x: 0.0, y: 1.0}} style={styles.background}/> 
                <View style={styles.imageWrapper}>
                    <Image source={require('../../assets/images/dumbbell.png')} style={styles.logo}/>
                </View>
                <Text style={styles.title}>My Gym Bro</Text>
                <View style={{alignItems: 'center', flex: 1, justifyAlign: 'center'}}>
                    <View style={{height:10}}/>
                    <Text style={styles.subtext} adjustsFontSizeToFit={true} numberOfLines={3}>{'\n'} A fitness companion to keep you on track with your goals</Text>
                    <View style={{height: 132}}/>
                    <LoginButton transparent={false} content='Login' />
                    <View style={{height:10}}/>
                    <LoginButton transparent={true} content='Register' />
                </View>
        </View>
    );
};
export default WelcomePage; 