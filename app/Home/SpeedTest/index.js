import React, {Component} from 'react';
import { StyleSheet, WebView, View } from 'react-native';
import { Container, Content } from 'native-base';

export default class SpeedTest extends Component {
    state = {
        jscode: "document.querySelector('.logo-container').style.diplay='none'"
    }

    render() {
        const {
            containerStyle
        } = styles;

        let jsocde = "document.querySelector('.logo-container').style.display='none';document.querySelector('.footer-container').style.display='none';document.querySelector('.footer-container').style.display='none';document.querySelector('.ookla-container').style.display='none';document.querySelector('.share-container').style.display='none';document.querySelector('#speed-value').style.color='#EC407A';"

        return (
            <View style={ {flex: 1} }>
                <WebView source={ {uri: 'https://fast.com/'} } style={ {flex: 1} } scalesPageToFit={true} injectedJavaScript={ jsocde } />
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