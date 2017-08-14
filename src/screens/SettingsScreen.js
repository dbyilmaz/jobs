import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect  } from 'react-redux';
import { clearLikedJobs } from '../actions';
import FBLoginView from '../components/FBLoginView';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import { AsyncStorage } from  'react-native';
import { Button,Icon } from 'react-native-elements';

class SettingsScreen extends Component {
    static navigationOptions =({ navigation }) => ({
        title: 'Settings',
        tabBarIcon: ({ tintColor }) => {
            return <Icon
                name="settings" size={25}
                color={tintColor}
            />;
        }

    });
    render() {
        return(
            <View>

                <Button title="Reset Liked Jobs"
                        icon={{ name: 'delete-forever' }}
                        backgroundColor="crimson"
                        buttonStyle={{ marginTop:30 }}
                        onPress= { this.props.clearLikedJobs }/>
                <FBLogin
                    buttonView={<FBLoginView />}
                    onLogout={() => {AsyncStorage.removeItem('fb_token')}}
                />
            </View>
        );
    };
}

export default connect(null, { clearLikedJobs })(SettingsScreen);