import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { navigation, screenProps } from 'react-navigation';
import { Button, Card, Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps'
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
        },
        tabBarIcon: ({ tintColor }) => {
            return <Icon
                name="favorite" size={25}
                color={tintColor}
            />;
        }
    });

    renderLikedJobs() {
       return this.props.likedJobs.map( (  job ) => {
           const { company, formattedRelativeTime, url, city, jobtitle, jobkey, longitude, latitude } = job;
           const initialRegion = {
               longitude,
               latitude,
               latitudeDelta:0.01,
               longitudeDelta: 0.01
           };
           return(
                <Card
                    key= { jobkey }
                    title= { jobtitle }
                >
                    <View style={ { height:300 } }>
                        <MapView
                            style={{flex:1, height: 300}}
                            cacheEnabled = { Platform.OS === 'android' }
                            scrollEnabled={ false }
                            initialRegion = { initialRegion }
                        >
                            <MapView.Marker draggable pinColor={'black'}
                                coordinate={initialRegion}
                            />
                            </MapView>
                        <View style={styles.detailWrapper }>
                            <Text>{ company }</Text>
                            <Text>{ city }</Text>
                            <Text>{ formattedRelativeTime }</Text>
                        </View>
                        <Button title=" Apply Now! "
                                backgroundColor="#03A9F4"
                                onPress={() =>{ Linking.openURL(url) }}
                        />
                    </View>

                </Card>
            );
        });
    }

    render() {
        return(<ScrollView style={{ overflow:'hidden'}} >
               { this.renderLikedJobs() }
            </ScrollView>
        );
    };
}

const styles = {
    detailWrapper :  {
        marginBottom: 20 ,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}
 mapStateToProps = (state)=>{
    return { likedJobs: state.likedJobs}
};


export default connect( mapStateToProps )(ReviewScreen);