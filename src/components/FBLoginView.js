import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, SocialIcon } from 'react-native-elements';

class FBLoginView extends Component {
    static contextTypes = {
        isLoggedIn: React.PropTypes.bool,
        login: React.PropTypes.func,
        logout: React.PropTypes.func,
        props: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render(){
        return (
        <Button title="Logout"
                icon={{ name: 'loop' }}
                backgroundColor="crimson"
                buttonStyle={{ marginTop:10 }}
                onPress= { () => {
                    this.context.logout()
                } }/>
        )
    }
}

export default FBLoginView;
