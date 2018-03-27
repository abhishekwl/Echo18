import React, {Component} from 'react';
import { StyleSheet, WebView, View } from 'react-native';
import { Container, Content } from 'native-base';

export default class Feedback extends Component {
    state = {
        baseUrl: 'http://192.168.43.251:8080'
    };
    
    render() {
        const {
            containerStyle
        } = styles;

        return (
            <View style={ {flex: 1} }>
                <WebView source={ {uri: this.state.baseUrl} } style={ {flex: 1} } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        padding: 16
    }
});