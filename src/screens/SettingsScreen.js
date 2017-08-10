import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends Component {
    static navigationOptions =({ navigation }) => ({
        title: 'Settings',
    })
    render() {
        return(
            <View>
                <Text>Settings Screen</Text>
            </View>
        );
    };
}

export default SettingsScreen ;