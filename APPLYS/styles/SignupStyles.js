import {
    Platform,
    ScrollView,
    StyleSheet,
  } from 'react-native';
import { Left } from 'native-base';

export default StyleSheet.create({
  logo: {
    marginTop: 100
  },
  form:{
    width: 320,
    marginBottom: 30,
    fontFamily: 'nunito',
    fontSize: 40
  },
  loginButton: {
    marginBottom: 30,
    width:150,
    height: 60,
    justifyContent: "center",
      textAlignVertical: "center"
  },
  submitButtonText: {
    fontSize: 18,
    fontFamily: 'nunito'
  },
  
    inputIOS: {
        fontSize: 16,
        width: 250,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      formContainer: {
          marginBottom: 20,
      },
      formItem: {
          marginBottom: 10
      },
      roleBtn: {
        padding: 10,
        margin: 15,
        height: 90,
        width: 300,
        backgroundColor: "white",
        textAlign: "center",
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOpacity: 0.7,
        elevation: 3,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 13},
      },
      roletxt:{
        textAlign: "center",
        fontSize: 30,
        color: "#92e66c",
        
      },
      iamtext:{
        margin: 20,
        fontSize: 40,
        textAlign: "center",
        color: "white"
      },
})