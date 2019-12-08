import * as WebBrowser from 'expo-web-browser';
import {AsyncStorage} from 'react-native';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    View,
    TextInput
} from 'react-native';
import styles from './Styles.js'
import { Button, Icon, Title, Text } from 'native-base';


export default class ManagePatients extends React.Component{
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Manage Patients',
    };
    
    render(){
        return(
            <View style = {styles.container}>
                <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                    <View style = {styles.container}>
                        <Text>MANAGE PATIENTS SCREEN</Text>
                        
                    </View>
                    
                </ScrollView>
            </View>
            
        )
        
    }
}
