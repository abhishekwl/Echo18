import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

export default class Tower extends Component {
    render() {
        const {
            containerStyle
        } = styles;

        return (
            <Container style={ containerStyle }>
                <Content padder>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        padding: 16
    }
});