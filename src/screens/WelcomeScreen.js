import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import Slides from '../components/Slides'
import ActivityIndicatorr from '../components/ActivityIndicatorr';
const  SLIDE_DATA = [
    { text: 'Welcome to JobApp', color:'#00B9FC' },
    { text: 'Use this to get a job', color: '#4E5670' },
    { text: 'Set your location, then swipe away', color: '#D12656'}
];

class WelcomeScreen extends Component {
    state = { token : null};

   async componentWillMount() {
       let token = await AsyncStorage.getItem('fb_token');
       if(token) {
            setTimeout(() => this.props.navigation.navigate('map'), 1000);
       }else {
           setTimeout(() =>  this.setState( { token:false } ), 2000);
           //this.props.navigation.navigate('welcome');
       }
    }
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    };

    render() {
        if(_.isNull(this.state.token)){
            return <ActivityIndicatorr  backgroundColor='#00B9FC' color="#fff"/>
        }
        return(
            <View style={{ backgroundColor:'#f4f4f4', flex:1}}>
                <Slides data= {SLIDE_DATA}
                onComplete = { () => this.onSlidesComplete}/>
            </View>
        );
    };
}

export default WelcomeScreen;