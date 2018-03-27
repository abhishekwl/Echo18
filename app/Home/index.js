import React, { Component } from 'react';
import Tower from './Tower';
import SpeedTest from './SpeedTest';
import Heatmap from './Heatmap';
import Feedback from './Feedback';
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text, StyleProvider } from 'native-base';
//LOCAL
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';


export default TabNavigator(
    {
        Tower: { screen: Tower },
        SpeedTest: { screen: SpeedTest },
        Heatmap: { screen: Heatmap },
        Feedback: { screen: Feedback }      
    },
    {
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarComponent: props => {
        return (
            <StyleProvider style={ getTheme(commonColor) }>
                <Footer>
                <FooterTab>
                    <Button
                    vertical
                    active={props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate("Tower")}>
                    <Icon name="bowtie" />
                    <Text>Tower</Text>
                    </Button>
                    <Button
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate("SpeedTest")}>
                    <Icon name="briefcase" />
                    <Text>SpeedTest</Text>
                    </Button>
                    <Button
                    vertical
                    active={props.navigationState.index === 2}
                    onPress={() => props.navigation.navigate("Heatmap")}>
                    <Icon name="headset" />
                    <Text>Heatmap</Text>
                    </Button>
                    <Button
                    vertical
                    active={props.navigationState.index === 3}
                    onPress={() => props.navigation.navigate("Feedback")}>
                    <Icon name="headset" />
                    <Text>Feedback</Text>
                    </Button>
                </FooterTab>
                </Footer>
            </StyleProvider>
        );
        }
    }
);