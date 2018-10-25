import React, {Component} from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Toast, Title, Left, Body, Right, Button } from 'native-base';
import { DrawerNavigator, StackNavigator } from "react-navigation";
import { Animated, Easing } from "react-native";
import SideBar from "./src/SideBar/SideBar.js";
import HomeScreen from "./src/HomeScreen/HomeScreen.js";
import LoginScreen from "./src/LoginScreen/LoginScreen.js";
import MonitoringScreen from "./src/MonitoringScreen/MonitoringScreen.js";
import SettingsScreen from "./src/SettingsScreen/SettingsScreen.js";
import DebuggingScreen from "./src/DebuggingScreen/DebuggingScreen.js";

import MonitoringDetailsScreen from "./src/MonitoringScreen/MonitoringDetailsScreen.js"


const HomeScreenRouter = DrawerNavigator(
    {
        Login: { screen: LoginScreen },
        Home: { screen: HomeScreen },
        Monitoring: { screen: MonitoringScreen },
        Settings: { screen: SettingsScreen },
        Debugging: { screen: DebuggingScreen },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: HomeScreenRouter },
        MonitoringDetails: { screen: MonitoringDetailsScreen }
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
        transitionConfig: () => ({
          transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing
          }
        })
    }
);

type Props = {};
export default class App extends Component<Props> {
    render () {
        return <AppNavigator />;
    }
}
