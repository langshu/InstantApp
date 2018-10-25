import React from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Form,
  Item,
  Input,
  Label
} from "native-base";

export default class LoginScreen extends React.Component {
    doLogin() {
        this.props.navigation.navigate("Home")
    }
    render() {
        return (
        <View style={styles.container}>
            <Image 
                source={require('../../images/desktop.jpg')}
                style={styles.backgroundImage}
            />
            <View style={styles.inner}>
                <Image 
                    source={require('../../images/login-logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.welcome}>Welcome to Instant</Text>
                <Form>
                    <Item>
                        <Icon type="FontAwesome" name="user" />
                        <Input placeholder="Username" />
                    </Item>
                    <Item>
                        <Icon type="FontAwesome" name="lock" />
                        <Input secureTextEntry placeholder="Password" />
                    </Item>
                    <Button
                        block
                        style={{ marginTop: 20, backgroundColor: "#02a7ec" }}
                        onPress={this.doLogin.bind(this)}>
                        <Text>Login</Text>
                    </Button>
                </Form>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    inner: {
        width: "70%",
    },
    logo: {
        width: 190,
        height: 100,
        alignSelf: "center",
    },
    backgroundImage: {
        position: "absolute",
        height: "100%",
        width: "100%",
        opacity: 0.2
    },
    welcome: {
        alignSelf: "center",
        color: "#7a7a7a",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    }
});