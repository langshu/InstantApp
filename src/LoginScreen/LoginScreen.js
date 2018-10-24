import React from "react";
import { StatusBar } from "react-native";
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
  Right
} from "native-base";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header/>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>LoginScreen</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}