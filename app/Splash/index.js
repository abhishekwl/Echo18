import React, {Component} from 'react';
import { Image, Text, StyleSheet, StatusBar, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Splash extends Component {
    render() {
        const {
            containerStyle,
            imageStyle,
            textStyle
        } = styles;

        return (
            <View style={ containerStyle }>

                <StatusBar hidden />

                <Animatable.Text animation='bounceIn' onAnimationEnd={ ()=>this.props.navigation.navigate('Home') }>
                    <Text style={ textStyle }>{ 'echo' }</Text>
                </Animatable.Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        height: 216,
        width: 256
    },
    textStyle: {
        color: 'black',
        fontSize: 96,
        fontFamily: 'sans-serif-light'
    }
});