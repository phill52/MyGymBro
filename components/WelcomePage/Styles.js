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
        fontFamily: 'Iceberg_400Regular',
        color: 'white',
        fontSize: 48,
        textShadowColor: 'black',
        textShadowOffset: {width: 0, height: -4},
        elevation: 29,
    },
    subtext:{
        textAlign:'center',
        fontFamily: 'Cairo',
        color: 'white',
        fontSize: 16, 
        width: 288,
        justifyContent: 'center',
        lineHeight: 15,
    }, 
    logo:{
        width: 240,
        height: 240,
    },
    imageWrapper:{
        marginTop:127,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 18,
    },
        shadowOpacity: 0.89,
        shadowRadius: 5.46,
        elevation: 22,
    },
    textWrapper:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;