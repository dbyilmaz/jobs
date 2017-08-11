import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FBLoginView from '../components/FBLoginView';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import { AsyncStorage } from  'react-native';

class SettingsScreen extends Component {
    static navigationOptions =({ navigation }) => ({
        title: 'Settings',
    })
    render() {
        return(
            <View>
                <Text>Settings Screen</Text>
                <FBLogin
                    buttonView={<FBLoginView />}
                    onLogout={() => {AsyncStorage.removeItem('fb_token')}}
                />
            </View>
        );
    };
}

export default SettingsScreen ;