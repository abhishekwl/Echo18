import React, {Component} from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Content, Input, Text, Item } from 'native-base';
import CarrierInfo from 'react-native-carrier-info';
 
export default class Heatmap extends Component {
    state = {
        carrierName: '',
        latitude: '',
        longitude: '',
        error: '',
        text: ''
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
        );

        CarrierInfo.carrierName().then(carrier=>{
            console.log(carrier);
            Alert.alert(carrier);
        });

      }

    render() {
        const {
            containerStyle,
            textStyle
        } = styles;

        return (
            <Container style={ containerStyle }>
                <Content padder>

                    <Text style={ textStyle }>{ 'Feedback' }</Text>
                    <Text style={ {color: '#9E9E9E'} }>{ "We're listening to you :)" }</Text>

                    <Item regular style={ {marginTop: 64} }>
                        <Input onChangeText={ (text)=>this.setState({ feedback: text }) } multiline placeholderTextColor={ '#424242' } selectionColor={ '#EC407A' } underlineColorAndroid={ '#EC407A' } placeholder='What do you feel?' />
                    </Item>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        padding: 16
    },
    textStyle: {
        color: '#424242',
        fontSize: 32
    }
});