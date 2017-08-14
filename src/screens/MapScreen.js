import React, {Component} from 'react';
import {View, Text, Dimensions, Keyboard} from 'react-native';
import MapView from 'react-native-maps';
import {connect} from 'react-redux';
import {Button, FormInput, Icon} from 'react-native-elements';
import ActivityIndicatorr from '../components/ActivityIndicatorr';
import * as actions from '../actions';

class MapScreen extends Component {
    static navigationOptions = {
        title: 'Map',
        label:false,
        tabBarIcon: ({ tintColor }) => {
            return <Icon
                name="my-location" size={25}
                color={tintColor}
                />;
        }
    };



    state = {
        job:'php',
        mapLoaded: false,
        region: {
            longitude: -122.28571,
            latitude: 37.832417,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09,
        },
    };

    componentDidMount() {
        this.setState({mapLoaded: true})
    }

    onRegionChangeComplete = (region) => {
        this.setState({region});

    };
    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, this.state.job, () => {
            this.props.navigation.navigate('deck');
            Keyboard.dismiss();
        });
    };
    onChangeText (job) {
        this.setState({job});
    }
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
                        onRegionChangeComplete={this.onRegionChangeComplete}
                    />
                    <View style={ styles.buttonContainer}>
                        <FormInput
                            onChangeText= { this.onChangeText.bind(this) }
                            style={styles.inputStyle}
                            value= { this.state.job }
                        />
                        <Button
                            larger
                            title="Search this area"
                            icon={{name: 'search'}}
                            onPress={this.onButtonPress}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={ { color:'white'}}
                        />

                    </View>
                </View>
            );
        }
    };
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 0,
        left: 0,
    },
    buttonStyle:{
        backgroundColor:'#5FC479',
    },
    inputStyle: {
        color:'#5FC479',
        textAlign:'center',
        backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom:10,
        fontSize:20
    }
};
export default connect(null, actions)(MapScreen);