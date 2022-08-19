import { Text, View, Image} from 'react-native'
import React, { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Styles.js';
import { useFonts } from 'expo-font';


const WelcomePage = (props) => {
    const [fontsLoaded] = useFonts({
        'Cairo': require('../../assets/fonts/Cairo-Regular.ttf'),
        'Iceberg': require('../../assets/fonts/Iceberg-Regular.ttf'),
    });
    return (
        <View style={styles.pageContainer}>
            <LinearGradient colors= {['#f55536','#fabc3c']} start={{x: 1.0, y: 0.0}} end={{x: 0.0, y: 1.0}} style={styles.background}/> 
                <Image source={require('../../assets/images/dumbbell.png')} style={styles.logo}/>
                <Text style={{fontFamily: 'Iceberg', fontSize: 30 }}>My Gym Bro</Text>
                <Text style={styles.subtext}>A fitness companion to keep you on track with your goals</Text>
        </View>
    );
};
export default WelcomePage; 