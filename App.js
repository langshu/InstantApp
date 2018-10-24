import React, {Component} from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Toast, Title, Left, Body, Right, Button } from 'native-base';
import { DrawerNavigator } from "react-navigation";
import SideBar from "./src/SideBar/SideBar.js";
import HomeScreen from "./src/HomeScreen/HomeScreen.js";
import LoginScreen from "./src/LoginScreen/LoginScreen.js";
import MonitoringScreen from "./src/MonitoringScreen/MonitoringScreen.js";
import SettingsScreen from "./src/SettingsScreen/SettingsScreen.js";
import DebuggingScreen from "./src/DebuggingScreen/DebuggingScreen.js";


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

type Props = {};
export default class App extends Component<Props> {
    render () {
        return <HomeScreenRouter />;
    }
}
