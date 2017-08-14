import React, { Component }             from 'react';
import { View }                         from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider }                     from 'react-redux';
import store                            from './store';

//screens
import Welcome        from './screens/WelcomeScreen';
import AuthScreen     from './screens/AuthScreen';
import MapScreen      from './screens/MapScreen';
import DeckScreen     from './screens/DeckScreen';
import ReviewScreen   from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

class App extends Component {
    render() {
        const  MainNavigator = TabNavigator({
            welcome: { screen: Welcome },
            auth:    { screen: AuthScreen },
            main:    {
                screen: TabNavigator({
                    map: { screen: MapScreen},
                    deck:{ screen: DeckScreen},
                    review: {
                        screen: StackNavigator({
                            review:  { screen: ReviewScreen},
                            settings: { screen: SettingsScreen}
                        })
                    }
                },{
                    swipeEnabled: true,
                    animationEnabled: false,
                    tabBarPosition: 'bottom',
                    tabBarOptions: {
                        labelStyle: { fontSize:10, margin:0 },
                        showIcon: true,
                        iconStyle: {
                            width: 25,
                            height: 25,
                        }},

                })
            }
        }, {
            swipeEnabled: false,
            tabBarPosition: 'bottom',
            navigationOptions: {
                tabBarVisible: false
            },
            lazy: true,
            animationEnabled: false
        });


        return(
            <Provider  store={store}>
                <MainNavigator tabBarPosition="bottom"/>
            </Provider>
        );
    };
}

export default App;