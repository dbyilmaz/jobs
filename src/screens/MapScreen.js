import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import ActivityIndicatorr from '../components/ActivityIndicatorr';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button } from 'react-native-elements';
class MapScreen  extends Component {
    state = {
        mapLoaded: false,
        region: {
            longitude:      32.869,
            latitude:       39.919893,
            longitudeDelta: 0.04,
            latitudeDelta:  0.14,
        }
    };

    componentDidMount() {
        this.setState( { mapLoaded: true } )
    }

    onRegionChangeComplete = ( region ) => {
        this.setState( { region } );

    };
    onButtonPress = () => {
        this.props.fetchJobs(this.state.region);
    };
    render() {
        if (!this.state.mapLoaded) {
            return (
                <ActivityIndicatorr color="#007AED"/>
            );
        } else {

            return (
                <View style={ {flex: 1} }>
                    <MapView
                        style={ {flex: 1} }
                        region={ this.state.region }
                        onRegionChangeComplete = {this.onRegionChangeComplete}
                    />
                    <View style={ styles.buttonContainer}>
                        <Button
                            larger
                            title="Search this area"
                            icon={{ name: 'search'}}
                            onPress={this.onButtonPress}/>
                    </View>
                </View>
            );
        }
    };
}

const styles = {
    buttonContainer: {
        position:'absolute',
        bottom: 20,
        right:0,
        left:0,
    }
};
export default connect(null, actions)(MapScreen);