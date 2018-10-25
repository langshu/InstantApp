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
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.inner}>
            <Image 
                source={require('../../images/login-logo.png')}
                style={styles.logo}
            />
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
                    full
                    rounded
                    style={{ marginTop: 20 }}
                    onPress={() => this.props.navigation.navigate("Home")}>
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
        width: 276,
        alignSelf: "center",
        marginBottom: 10
    },
});