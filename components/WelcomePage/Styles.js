import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pageContainer:{
        width: '100%',
        height: '100%',
        marginTop: '0%',
        backgroundColor: 'white',
    },
    background:{
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    title:{
        textAlign:'center',
        fontFamily: 'Iceberg',
        color: 'white',
        fontSize: 48,
        textShadowColor: 'black',
        textShadowOffset: {width: 0, height: -4},
    },
    subtext:{
        textAlign:'center',
        fontFamily: 'Cairo',
        color: 'white',
        fontSize: 16, 
    }, 
    logo:{
        width: 240,
        height: 240,
        marginTop:127,
        alignSelf: 'center',
    }
});

export default styles;