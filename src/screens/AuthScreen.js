import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FBLoginView from '../components/FBLoginView';
import { Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class AuthScreen extends Component {
 componentDidMount() {
     this.props.facebookLogin();
     this.onAuthComplete(this.props);
 }

 componentWillReceiveProps(nextProps){
     this.onAuthComplete(nextProps);
 }

 onAuthComplete (props) {
     if(props.token){
         this.props.navigation.navigate('map');
         console.log('nextprops:'+props.token);
     }
 }

    render() {
        return (
            <View>

            </View>
        );
    };
}
const mapStateToProps =  ( { auth } ) => {
    return { token: auth.token }
};

export default connect(mapStateToProps,  actions )(AuthScreen);