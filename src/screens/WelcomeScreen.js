import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Slides from '../components/Slides'

const  SLIDE_DATA = [
    { text: 'Welcome to JobApp', color:'#00B9FC' },
    { text: 'Use this to get a job', color: '#4E5670' },
    { text: 'Set your location, then swipe away', color: '#D12656'}
];

class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return(
            <View style={{ backgroundColor:'#f4f4f4', flex:1}}>
                <Slides data= {SLIDE_DATA}
                onComplete = { () => this.onSlidesComplete}/>
            </View>
        );
    };
}

export default WelcomeScreen;