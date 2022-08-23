import { Alert, Text, View, Pressable } from 'react-native'
import React, { Component } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LoginButton = (props) => {
    const { transparent, content, screenName} = props;
    if (transparent){
        return(
            <View style={{
                borderWidth:2,
                borderColor:'#CD522B',
                alignItems:'center',
                justifyContent:'center',
                width:298,
                height:44,
                backgroundColor: 'rgba(0,0,0,0.0)',
                borderRadius:151,
                elevation: 5,
                }} >
                    {/* <Pressable> */}
                <Text style={{color: 'white', fontFamily: 'Cairo', fontSize: 16, textAlign: 'center',}}>{content}</Text>
                {/* </Pressable> */}
            </View> 
        );
    }
    // const backColor = transparent === true ? 'rgba(0,0,0,0.0)': '#CD522B';
    // const strokeColor = transparent === true ? '#CD522B' : 'rgba(0,0,0,0.0)';
    return(
        <View style={{
            alignItems:'center',
            justifyContent:'center',
            width:298,
            height:44,
            backgroundColor: '#CD522B',
            borderRadius:151,
            textShadowColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
            }} >
                {/* <Pressable> */}
            <Text style={{color: 'white', fontFamily: 'Cairo', fontSize: 16, textAlign: 'center',}}>{content}</Text>
            {/* </Pressable> */}
        </View> 
    );
}
export default LoginButton;