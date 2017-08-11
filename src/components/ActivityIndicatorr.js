import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ActivityIndicatorr extends Component {

    render() {
        return (
            <View style = {[styles.container, {backgroundColor:this.props.backgroundColor}]}>
                <ActivityIndicator
                    animating
                    color = {this.props.color}
                    size = "large"
                    style = {[styles.activityIndicator]}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    }
});
export default ActivityIndicatorr;