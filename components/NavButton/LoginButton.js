import { Alert, Text, View, Pressable } from 'react-native'
import React, { Component } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LoginButton = (props) => {
    const { transparent, content, screenName} = props;
    const backColor = transparent === true ? 'rgba(0,0,0,0.0)': '#CD522B';
    const strokeColor = transparent === true ? '#CD522B' : 'rgba(0,0,0,0.0)';

    return(
        <View style={{
            borderWidth:2,
            borderColor:{strokeColor},
            alignItems:'center',
            justifyContent:'center',
            width:298,
            height:44,
            backgroundColor: {backColor},
            borderRadius:151,
            elevation: 5,
            }} >
                {/* <Pressable> */}
            <Text style={{color: 'white', fontFamily: 'Cairo', fontSize: 16, textAlign: 'center',}}>{content}</Text>
            {/* </Pressable> */}
        </View> 
    );
}
export default LoginButton;