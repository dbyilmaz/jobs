import { AsyncStorage } from  'react-native';
import { FBLoginManager } from 'react-native-facebook-login';
import {
    FB_LOGIN_SUCCESS,
    FB_LOGIN_FAIL
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
            doFacebookLogin(dispatch);
        }
};

const doFacebookLogin =  async dispatch  => {
     await FBLoginManager.loginWithPermissions(["email","public_profile"], function(error, data) {
         if (error) {
             console.log("errororororo");
             return dispatch({type: FB_LOGIN_FAIL});
         } else {
             AsyncStorage.setItem('fb_info',data.profile);
             let token = data.credentials.token;
             AsyncStorage.setItem('fb_token', token);
             dispatch({ type: FB_LOGIN_SUCCESS, payload: token})
         }
     });


};