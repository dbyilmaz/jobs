import { AsyncStorage } from  'react-native';
import {
FB_LOGIN_SUCCESS
} from './types'

//AsyncStorage.setItem('fb_token', token);
//AsyncStorage.getItem('fb_token');

export const facebookLogin = () => async dispatch => {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            //Dispatch an action saying FB login is done
            dispatch({type: FB_LOGIN_SUCCESS, payload: token});

        } else {
            //Start up FB login process

        }
};