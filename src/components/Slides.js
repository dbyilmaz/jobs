import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions  } from 'react-native';
import { Button } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide(index){
        if(index === this.props.data.length -1){
            return (
                <Button
                    textStyle={{ fontSize:18 }}
                    buttonStyle={styles.button}
                    title="Onwards!"
                    onPress={ this.props.onComplete() }
                />
            );
        }
    };

    renderSlides () {
        return this.props.data.map((slide, index) => {
           return(
            <View
                key={slide.text}
                style={[styles.slide, { backgroundColor:slide.color }]}>
                <Text style={styles.slideText} multiline> { slide.text } </Text>
                {this.renderLastSlide(index)}
            </View>
           );
        });
    }

    render() {
        return(
        <ScrollView
            horizontal
            style={{ flex:1}}
            pagingEnabled
        >
            {this.renderSlides()}
        </ScrollView>
        );
    };
}

const styles = {
    slide:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width: SCREEN_WIDTH,
    },
    slideText : {
        fontSize: 35,
        color:'#fff',
        textAlign:'center'

    },
    button:{
        backgroundColor:'#FDAA29',
        marginTop:50,
        borderRadius:2,
        paddingRight:90,
        paddingLeft:90
    }
};

export default Slides ;