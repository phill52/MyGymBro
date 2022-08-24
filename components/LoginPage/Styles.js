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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
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
        width: 64,
        height: 64,
    },
    imageWrapper:{
        marginLeft: '5%',
        marginTop:63,
        shadowColor: "#000",
    },
    textWrapper:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        textAlign: 'left',
        marginLeft: '12%',
    },
    aboveField:{
        color: 'white',
        fontSize: 12,
        fontFamily: 'Cairo',
        textAlign: 'left',
        marginLeft: '10%'
    },
    inputField:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
    }
});

export default styles;