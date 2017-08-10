import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FBSDK from 'react-native-fbsdk';
const { LoginButton } = FBSDK;

class AuthScreen extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                alert("Login was successful with permissions: " + result.grantedPermissions)
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")}/>
            </View>
        );
    };
}

export default AuthScreen;