import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { navigation, screenProps } from 'react-navigation';
import { Button } from 'react-native-elements';
import MatarialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class ReviewScreen extends Component {
    static navigationOptions =({ navigation }) => ({
        title: 'Review Jobs',
        headerRight: (<Button buttonStyle={ { backgroundColor: '#8767E5' } }
                             title="Settings"
                             iconLeft icon={{ name: 'settings' }}
                             onPress={()=> navigation.navigate('settings') }
                             backgroundColor="rgba(0,0,0,0)"/>
        ),
        headerStyle: {
            marginTop: Platform.OS === 'android' ? 0 : 24
        }
    });

    render() {
        return(
            <View>
                <Text>Review Screen</Text>
            </View>
        );
    };
}

export default ReviewScreen;